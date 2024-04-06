import Typography from "@/components/Typography";
import reward_tape from "/img/reward_tape.png";
import MbtiCard from "@/components/MbtiCard";
import Score from "../Score";

export default function Report() {
	return (
		<section className="w-full h-[1680px] flex flex-col bg-black">
			<div className="flex flex-col justify-center items-center text-point"></div>

			<div className="relative h-[200px]">
				<div className="absolute right-0 ">
					<img src={reward_tape} alt="tape" />
				</div>

				{/* title */}
				<div className="absolute top-20 translate-x-20">
					<div className="flex flex-col justify-center items-center text-point">
						<Typography type="title_02">AI가 분석한</Typography>
						<Typography type="title_02">대화 분석 리포트</Typography>
					</div>
				</div>
			</div>

			{/* 대화 요약 */}
			<article className="flex flex-col justify-center items-center mb-8 relative">
				<div className="text-white">
					<Typography type="main_text_03">대화 요약</Typography>
				</div>
				<button className="absolute top-[4.2rem] right-9">
					<img alt="retry" src="/retry.svg" />
				</button>
				<div className="bg-white rounded-[30px] w-[335px] h-[206px] flex flex-col justify-center items-center m-5">
					<div className="text-center m-1 p-2">
						<Typography type="main_text_03">
							김민지는 돈이 없어서 짜증나고 이철수는 아이돌에 빠졌으며 양은미는 주로 그들의 이야기를 듣고 위로해주는
							대화
						</Typography>
					</div>
				</div>
			</article>

			{/* 대화 평화 점수 */}
			<article className="flex flex-col justify-center items-center mb-5">
				<div className="text-white">
					<Typography type="main_text_03">대화 평화 점수</Typography>
				</div>
				<div className="bg-white rounded-[30px] w-[335px] h-[301px] flex justify-center items-center m-5">
					<div className="flex gap-4">
						<Score name="김민지" score={90} lank="GOLD" />
						<Score name="양은미" score={54} lank="SILVER" />
						<Score name="이철수" score={30} lank="BRONZE" />
					</div>
				</div>
			</article>

			{/* MBTI 추측 */}
			<article className="flex flex-col justify-center items-center">
				<div className="text-white">
					<Typography type="main_text_03">AI가 대화를 보고 추측한 MBTI</Typography>
				</div>
				<div className="grid grid-cols-2 place-items-center w-[335px] h-[420px] m-5 gap-4">
					<MbtiCard type="E" name="김민지" />
					<MbtiCard type="I" name="양은미" />
					<MbtiCard type="F" name="김민지" />
					<MbtiCard type="T" name="이철수" />
				</div>
				<div className="text-white">
					<Typography type="sub_text_02">발화 빈도 수와 공감성 멘트 비율을 통해 측정했습니다.</Typography>
				</div>
			</article>
		</section>
	);
}
