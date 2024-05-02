import Typography from "@/components/Typography";
import { useEffect, useState } from "react";

const SENTENCES = [
	`심사숙고해서\n2024 대화 평화상을\n뽑고 있어요`,
	`우리 대화의\n평화의 여신상은 누구?`,
	`우리 중 가장\n말 많은 사람은?`,
];

export default function UploadFallback() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % SENTENCES.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section>
			<div className="mb-12 h-[90px] pl-11">
				<Typography type="main_text_03" classNames={`whitespace-pre-wrap text-white h-full`}>
					{SENTENCES[currentIndex]}
				</Typography>
			</div>
			<img alt="loading" src="/rererere.gif" />
		</section>
	);
}
