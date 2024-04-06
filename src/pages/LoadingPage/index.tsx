import Layout from "@/components/Layout";
import Typography from "@/components/Typography";

export default function LoadingPage() {
	return (
		<Layout classNames="flex justify-conter items-center">
			<section>
				<div className="pl-11 pb-16">
					<Typography
						type="main_text_03"
						classNames="whitespace-pre-wrap text-white"
					>{`심사숙고해서\n2024 대화 평화상을\n뽑고 있어요`}</Typography>
				</div>
				<img alt="loading" src="/re_1.gif" />
			</section>
		</Layout>
	);
}
