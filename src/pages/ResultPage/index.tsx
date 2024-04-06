import Layout from "@/components/Layout";
import Reward from "./components/Reward";
import Report from "./components/Report";
import { useParams } from "react-router-dom";
import useGetAwardResult from "@/quries/useGetAwardResult";
import { getRewardPeoples, getTopThree } from "./utils";

export default function ResultPage() {
	const { id } = useParams();
	const { data } = useGetAwardResult(Number(id));

	if (!data) return <></>;

	const reportSummary = data.summary;
	const reportScore = getTopThree(data.peace_score);
	const reportMbti = data.mbti_analysis;
	const rewardList = getRewardPeoples(data.peace_score);

	return (
		<Layout>
			<Reward rewardList={rewardList} />
			<Report summaries={reportSummary} scores={reportScore} mbtis={reportMbti} />
		</Layout>
	);
}
