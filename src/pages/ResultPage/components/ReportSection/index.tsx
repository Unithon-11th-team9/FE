import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function ReportSection() {
	return (
		<section className="w-full h-[900px] flex flex-col bg-black">
			<div className="flex flex-col justify-center items-center text-point mt-10">
				<Typography type="title_02">AI가 분석한</Typography>
				<Typography type="title_02">대화 리포트</Typography>
			</div>
		</section>
	);
}
