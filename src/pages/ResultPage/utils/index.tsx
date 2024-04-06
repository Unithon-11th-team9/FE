type PeaceScore = {
	[key: string]: number;
};

export function getTopThree(scores: PeaceScore): [string, number][] {
	// 객체를 배열로 변환하고, 점수(값)를 기준으로 내림차순 정렬합니다.
	const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
	// 상위 3개의 요소만 반환합니다.
	return sortedScores.slice(0, 3);
}

export function getRewardPeoples(scores: PeaceScore): [string, number][] {
	const first = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
	const last = Object.entries(scores).sort((a, b) => a[1] - b[1])[0];

	return [first, last];
}

// 현재 인덱스를 추적할 변수 선언
let currentIndex = 1;

export function getSummaryNext(summaries: string[]): string {
	// 현재 인덱스에 해당하는 요소를 가져옴
	const summary = summaries[currentIndex];

	// 인덱스 업데이트
	currentIndex = (currentIndex + 1) % summaries.length;

	// 현재 요소 리턴
	return summary;
}
