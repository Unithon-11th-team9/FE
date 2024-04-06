import { twMerge } from "tailwind-merge";

type TextName =
	| "title_01"
	| "title_02"
	| "name_text_01"
	| "main_text_01"
	| "main_text_02"
	| "main_text_03"
	| "sub_text_01"
	| "sub_text_02"
	| "sub_text_03";

type TextProps = {
	type: TextName;
	classNames?: string;
	children: string;
};

const textStyles = {
	title_01: "text-white font-['PyeongChangPeace-Bold'] text-title01",
	title_02: "text-white font-['PyeongChangPeace-Bold'] text-title02",
	name_text_01: "text-white font-['PyeongChangPeace-Bold'] text-nameText01 leading-nameText01",
	main_text_01: "text-white text-mainText leading-5",
	main_text_02: "text-white text-mainText",
	main_text_03: "text-white text-mainText leading-mainText03",
	sub_text_01: "text-white text-subText leading-subText01",
	sub_text_02: "text-white text-subText leading-subText02",
	sub_text_03: "text-white text-subText leading-subText03 font-[SBAggroL]",
};

export default function Typography({ type, classNames, children }: TextProps) {
	return <span className={twMerge(textStyles[type], classNames)}>{children}</span>;
}
