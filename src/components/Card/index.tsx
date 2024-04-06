import Typography from "../Typography";
import reward_good from "/img/reward_good.png";
import reward_bad from "/img/reward_bad.png";

type CardProps = {
	name: string;
	type: "good" | "bad";
};

export default function Card({ name, type }: CardProps) {
	return (
		<section
			className={`${type === "good" ? "bg-back01" : "bg-[#141217]"} bg- w-[220px] h-[506px] text-white flex flex-col justify-around rounded-[20px] relative`}
		>
			<div className="flex flex-col justify-center items-center mt-5">
				<h1 className={`${type === "bad" && "text-[#DF2425]"} text-xl`}>2024</h1>
				<h2 className={`${type === "bad" && "text-[#DF2425]"} text-xl`}>
					{type === "good" ? "대화 평화상" : "욕쟁이 상"}
				</h2>
				<div className="flex justify-center mt-1">
					<Typography type="name_text_01">{name}</Typography>
				</div>
				{type === "good" && (
					<img src={reward_good} width="179.3px" height="191.61px" alt="reward_good" className="mt-5" />
				)}
				{type === "bad" && (
					<img src={reward_bad} width="234.51px" height="189.95px" alt="reward_bad" className="mt-5" />
				)}

				<div className="absolute bottom-16 text-center">
					<Typography type="sub_text_01">귀하께서는 그간의 대화를</Typography>
					<br />
					<Typography type="sub_text_01">
						{type === "good" ? "평화로 이끌어 주셨으므로" : "자극과 도파민을 제공해 주셨으므로"}
					</Typography>
					<br />
					<Typography type="sub_text_01">그 노고에 감사드립니다</Typography>
				</div>
			</div>
			<div className="text-center">
				<Typography type="sub_text_03">2024년 4월 6일</Typography>
			</div>
		</section>
	);
}
