import reward_bad from "../../../public/img/reward_bad.png";

export default function BadCard() {
	return (
		<section className="bg-black w-[220px] h-[506px] text-white flex flex-col justify-around">
			<div className="flex flex-col justify-center items-center mt-5">
				<h1 className="text-xl">2024</h1>
				<h2 className="text-xl">욕쟁이 상</h2>
				<div className="flex justify-center p-[0.1rem]">
					<span className="text-sm font-['PyeongChangPeace-Bold']">조유나</span>
					{/* <button></button> */}
				</div>
				<img src={reward_bad} width="234.51px" height="189.95px" alt="reward_good" className="mt-5" />
				<p className="text-xs font-light py-9 mt-3">
					귀하께서는 오늘의 대화에 <br />
					자극과 도파민을 제공해 주셨으므로 <br />그 노고에 감사드립니다.
				</p>
			</div>
			<p className="text-xs text-white opacity-40">2024년 4월 6일</p>
		</section>
	);
}
