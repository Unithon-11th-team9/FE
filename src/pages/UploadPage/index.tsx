import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import useUploadFile from "@/mutations/useUploadFile";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadFallback from "./components/UploadFallback";

export default function UploadPage() {
	const navigate = useNavigate();
	const { mutate, isPending } = useUploadFile();
	const inputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<Blob>();
	const handleUploadButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
		}
	};

	const handleSendFileButtonClick = () => {
		const formData = new FormData();
		if (file) {
			formData.append("file", file);
			mutate(file, {
				onSuccess: (data) => {
					navigate(`/result/${data}`);
				},
			});
		}
	};

	return (
		<Layout classNames={`flex flex-col items-center ${isPending && "justify-center"}`}>
			{isPending ? (
				<UploadFallback />
			) : (
				<>
					<section className="text-center pt-16">
						<Typography
							type="title_02"
							classNames="whitespace-pre-wrap text-point"
						>{`2024 대화 평화상\n참가 방법`}</Typography>
						<img alt="caution" src="/caution.png" className="pr-5 pl-5 pt-8" />
					</section>
					<img
						alt="holding phone"
						src="/holding-phone.png"
						style={{ width: "192px", height: "234px", transform: "translateY(-32px)" }}
					/>
					{!file ? (
						<Button buttonType="button2" onClick={handleUploadButtonClick} classNames="w-upload">
							톡방 대화 올리기
						</Button>
					) : (
						<Button buttonType="button3" onClick={handleSendFileButtonClick} classNames="w-upload">
							심사 받기
						</Button>
					)}
					<input type="file" ref={inputRef} style={{ display: "none" }} onChange={handleFileChange} />
				</>
			)}
		</Layout>
	);
}
