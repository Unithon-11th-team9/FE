import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import { useNavigate } from "react-router-dom";

export default function JoinPage() {
	const navigate = useNavigate();
	return (
		<Layout
			classNames="relative"
			style={{ background: "linear-gradient(0deg, rgba(0,0,1,1) 0%, rgba(23,7,58,1) 100%)" }}
		>
			<img alt="background for join page" src="join-background.png" className="absolute top-0 left-0 w-mobile h-auto" />
			<section className="w-full flex justify-center pt-48 flex-col items-center">
				<Typography type={"title_01"} classNames="text-point">
					2024 대화 평화상
				</Typography>
				<img src="/main.png" className="w-72 h-72 pt-3" alt="main image" />
				<Button buttonType={"button1"} onClick={() => navigate("/upload")}>
					우리 톡방 참가하기
				</Button>
			</section>
			<section className="w-full flex justify-center text-center pt-6 pb-6">
				<Typography type="sub_text_01" classNames="whitespace-pre-wrap">
					{`실제 카톡 대화를 보고 AI가 심사해드립니다.\n대화 내용은 사람을 거치지 않고, 분석 후 즉시 자동 폐기됩니다.\n대화 분석을 위한 용도 이외에는 전혀 사용되지 않습니다.`}
				</Typography>
			</section>
		</Layout>
	);
}
