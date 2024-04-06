import Layout from "@/components/Layout";
import Reward from "./components/Reward";
import Report from "./components/Report";
import { getRewardPeoples, getTopThree } from "./utils";

export default function ResultPage() {
	const data = {
		peace_score: {
			"김소미 YAPP Server": 85,
			"박근보 YAPP iOS": 87,
			"배수연 네이버 마케팅": 88,
			"샌디 박신영 언니 핏프티": 90,
			"임영선 핏프티": 95,
			"조기윤 YAPP Server": 84,
		},
		summary: [
			"엄청 재밌는 일들 많았고, 모두가 진짜 알차게 놀았어~",
			"동료들이 서로 격려하고 축하해주는 훈훈한 분위기야~",
			"멤버들 서로 챙기며 일상 공유하고 격려해, 온통 화기애애해~",
			"일하면서 친분도 쌓고 정보도 공유하는 든든한 친구들 모임이구만!",
		],
		mbti_analysis: {
			E: "샌디 박신영 언니 핏프티",
			F: "임영선 핏프티",
			I: "조기윤 YAPP Server",
			T: "박근보 YAPP iOS",
		},
	};
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
