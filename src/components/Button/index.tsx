import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType: ButtonType;
	classNames?: string;
	children: string;
}

type ButtonType = "button1" | "button2" | "button2_off" | "button3" | "button4";

const buttonStyles = {
	button1: " rounded-button text-white bg-point text-xl p-button hover:bg-point/70",
	button2: "rounded-button text-white bg-point text-xl p-button hover:bg-point/70",
	button2_off: "rounded-button text-white/50 bg-back03 text-mainText p-button hover:bg-back03/70",
	button3: "rounded-button text-point bg-white text-xl p-button hover:bg-point hover:text-white",
	button4: "rounded-button text-white bg-point text-subText p-button_sm hover:bg-point/70",
};

export default function Button({ buttonType, children, classNames, ...props }: ButtonProps) {
	return (
		<button className={twMerge(buttonStyles[buttonType], classNames)} {...props}>
			<span>{children}</span>
		</button>
	);
}
