import reward_good from "../../../public/img/reward_good.png";

export default function Card() {
	return (
		<section className="bg-[#17073A] w-[220px] h-[506px] text-white flex flex-col justify-around">
			<div className="flex flex-col justify-center items-center mt-5">
				<h1 className="text-xl">2024</h1>
				<h2 className="text-xl">대화 평화상</h2>
				<div className="flex justify-center p-[0.1rem]">
					<span className="text-sm font-['PyeongChangPeace-Bold']">조유나</span>
					{/* <button></button> */}
				</div>
				<img src={reward_good} width="179.3px" height="191.61px" alt="reward_good" className="mt-5" />
				<p className="text-xs font-light py-9 mt-3">
					귀하께서는 그간의 대화를 <br />
					평화로 이끌어 주셨으므로 <br />그 노고에 감사드립니다
				</p>
			</div>
			<p className="text-xs text-white opacity-40">2024년 4월 6일</p>
		</section>
	);
}
