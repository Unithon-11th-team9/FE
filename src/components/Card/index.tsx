import Typography from "../Typography";
import reward_good from "/img/reward_good.png";
import reward_bad from "/img/reward_bad.png";
import compositon_one from "/gif/composition_1.gif";
import compositon_two from "/gif/composition_2.gif";

type CardProps = {
	names: string[];
	type: boolean;
	clickFn?: () => void;
};

//type이 true인 경우 평화상, false인 경우 욕쟁이 상
export default function Card({ names, type, clickFn }: CardProps) {
	const now = new Date();
	const year = now.getFullYear().toString();
	const month = now.getMonth() + 1;
	const date = now.getDate().toString();
	const dataText = `${year}년 ${month.toString()}월 ${date}일`;
	return (
		<article
			onClick={clickFn}
			className={`${type ? "bg-back01" : "bg-[#141217]"} w-[220px] h-[506px] text-white flex flex-col justify-between rounded-[20px] relative cursor-pointer`}
		>
			{type && <img src={compositon_one} alt="compostion_1" className="absolute z-0 overflow-hidden top-16" />}
			{!type && <img src={compositon_two} alt="compostion_2" className="absolute z-0 overflow-hidden top-16" />}

			<div className="flex flex-col justify-center items-center mt-6 z-20">
				<h1 className={`${!type && "text-[#DF2425]"} text-xl`}>2024</h1>
				<h2 className={`${!type && "text-[#DF2425]"} text-xl`}>{type ? "대화 평화상" : "욕쟁이 상"}</h2>
				<div className="flex justify-center items-center mt-1 z-20">
					<Typography type="name_text_01">{type ? names[0][0] : names[1][0]}</Typography>
					<button>
						<img alt="rewrite" src="/rewrite.svg" />
					</button>
				</div>
				{type && <img src={reward_good} width="179.3px" height="191.61px" alt="reward_good" className="mt-4" />}
				{!type && <img src={reward_bad} width="234.51px" height="189.95px" alt="reward_bad" className="mt-4" />}

				<div className="absolute bottom-[5rem] text-center">
					<Typography type="sub_text_03">귀하께서는 그간의 대화를</Typography>
					<br />
					<Typography type="sub_text_03">
						{type ? "평화로 이끌어 주셨으므로" : "자극과 도파민을 제공해 주셨으므로"}
					</Typography>
					<br />
					<Typography type="sub_text_03">그 노고에 감사드립니다</Typography>
				</div>
			</div>
			<div className="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<Typography type="sub_text_03">{dataText}</Typography>
			</div>
		</article>
	);
}
