import Typography from "../Typography";
import mbti_E from "/img/mbti_e.png";
import mbti_I from "/img/mbti_i.png";
import mbti_F from "/img/mbti_f.png";
import mbti_T from "/img/mbti_t.png";

type MbtiCardProps = {
	name: string;
	type: "E" | "I" | "F" | "T";
};

const mbti_text = {
	E: "말을 가장 많이한 사람",
	I: "말을 가장 적게 한 사람",
	F: "공감을 많이 한 사람",
	T: "냉철한 사람",
};

export default function MbtiCard({ name, type }: MbtiCardProps) {
	return (
		<article className="flex flex-col justify-center items-center">
			{type === "E" && <img src={mbti_E} alt="mbti_e" className="h-[80px] w-[135px]" />}
			{type === "I" && <img src={mbti_I} alt="mbti_i" className="h-[80px]" />}
			{type === "F" && <img src={mbti_F} alt="mbti_f" className="h-[80px]" />}
			{type === "T" && <img src={mbti_T} alt="mbti_t" className="h-[80px]" />}
			<div className="w-[158px] h-[119px] rounded-[30px] flex flex-col justify-center items-center text-xl gap-[0.1rem] bg-white">
				<h1>
					너
					<span className="text-point">
						<Typography type="main_text_03">{type}</Typography>
					</span>
					야?
				</h1>
				<Typography type="sub_text_03">{mbti_text[type]}</Typography>
				<span className="text-point truncate w-20 text-center">
					<Typography type="main_text_03">{name}</Typography>
				</span>
			</div>
		</article>
	);
}
