import Button from "@/components/Button";
import Card from "@/components/Card";
import Typography from "@/components/Typography";
import reward_particle from "/img/reward_particle.png";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";

type RewardProps = { rewardList: [string, number][] };

export default function Reward({ rewardList }: RewardProps) {
	const [firstCard, setFirstCard] = useState(true);
	const [secondCard, setSecondCard] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		setFirstCard((prev) => !prev);
		setSecondCard((prev) => !prev);
	};

	const handleDownload = async () => {
		if (!divRef.current) return;

		try {
			const div = divRef.current;
			const canvas = await html2canvas(div, { scale: 2 });
			canvas.toBlob((blob) => {
				if (blob !== null) {
					saveAs(blob, "result.png");
				}
			});
		} catch (error) {
			console.error("Error converting div to image:", error);
		}
	};

	return (
		<section className="w-full flex flex-col">
			<div className="relative">
				<img src={reward_particle} alt="particle" />
				{/* title */}
				<div className="absolute top-20 translate-x-12">
					<div className="flex flex-col justify-center items-center">
						<Typography type="title_02" classNames="text-point">
							2024 대화 평화상
						</Typography>
						<Typography type="title_02" classNames="text-point">
							시상식
						</Typography>
						<div className="text-white mt-4">
							<Typography type="main_text_03">위대한 그대... 축하합니다!!</Typography>
						</div>
					</div>
				</div>
			</div>
			{/* card select */}
			<div className="w-[375px] h-[570px] bg-black relative overflow-hidden">
				<div className="relative w-full ">
					<div className="flex flex-col absolute left-6 z-20">
						<div ref={divRef} className="bg-black">
							<Card names={rewardList} type={firstCard} clickFn={handleClick} back={false} />
						</div>
						<div className="text-white scale-90 flex justify-center items-center mt-4">
							<Button buttonType="button4" onClick={handleDownload}>
								다운받기
							</Button>
						</div>
					</div>
				</div>

				<div className="absolute top-16 right-1 rotate-[8deg] z-10 opacity-50">
					<Card names={rewardList} type={secondCard} clickFn={handleClick} back />
				</div>
			</div>
		</section>
	);
}
