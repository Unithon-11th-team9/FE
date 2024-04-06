import Button from "@/components/Button";
import Card from "@/components/Card";
import Typography from "@/components/Typography";
import reward_particle from "/img/reward_particle.png";

export default function Reward() {
	return (
		<section className="w-full flex flex-col">
			<div className="relative">
				<img src={reward_particle} alt="particle" />
				{/* title */}
				<div className="absolute top-20 translate-x-16">
					<div className="flex flex-col justify-center items-center text-point">
						<Typography type="title_02">2024 대화 평화상</Typography>
						<Typography type="title_02">시상식</Typography>
						<div className="text-white mt-4">
							<Typography type="main_text_03">위대한 그대... 축하합니다!!</Typography>
						</div>
					</div>
				</div>
			</div>
			{/* card select */}
			<div className="w-[375px] h-[550px] bg-black">
				<div className="relative w-full ">
					<div className="flex flex-col absolute top-10 left-6 z-20">
						<Card name="조유나" type="good" />
						<div className="text-white scale-90 flex justify-center items-center mt-3">
							<Button buttonType="button4">다운받기</Button>
						</div>
					</div>
				</div>

				<div className="absolute top-[22rem] right-16 rotate-[8deg] z-10 opacity-50">
					<Card name="조유나" type="bad" />
				</div>
			</div>
		</section>
	);
}
