import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType: ButtonType;
	children: string;
}

type ButtonType = "button1" | "button2" | "button2_off" | "button3" | "button4";

const defaultStyle = "rounded-button";
const buttonStyles = {
	button1: "text-white bg-point text-mainText p-button hover:bg-point/70",
	button2: "text-white bg-point text-mainText p-button hover:bg-point/70",
	button2_off: "text-white/50 bg-back03 text-mainText p-button hover:bg-back03/70",
	button3: "text-point bg-white text-mainText p-button hover:bg-back03",
	button4: "text-white bg-point text-subText p-button_sm hover:bg-point/70",
};

export default function Button({ buttonType, children, ...props }: ButtonProps) {
	return (
		<button className={`${defaultStyle} ${buttonStyles[buttonType]}`} {...props}>
			<span>{children}</span>
		</button>
	);
}
