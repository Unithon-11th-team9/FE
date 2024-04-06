import Typography from "@/components/Typography";
import reward_gold from "/img/reward_gold.png";
import reward_silver from "/img/reward_silver.png";
import reward_bronze from "/img/reward_bronze.png";

type ScoreProps = {
	name: string;
	score: number;
	lank: "GOLD" | "SILVER" | "BRONZE";
};

export default function Score({ name, score, lank }: ScoreProps) {
	const score_text = score + "점";
	return (
		<div className="flex flex-col h-[260px] w-[70px] justify-center items-cente">
			<Typography type="main_text_03">{score_text}</Typography>
			<div className="w-16">
				{lank === "GOLD" && <img src={reward_gold} alt="gold" />}
				{lank === "SILVER" && <img src={reward_silver} alt="silver" className="mt-10" />}
				{lank === "BRONZE" && <img src={reward_bronze} alt="bronze" className="mt-[6.2rem]" />}
			</div>
			<div className="text-point mt-2 w-full text-center truncate">
				<Typography type="main_text_03">{name}</Typography>
			</div>
		</div>
	);
}
