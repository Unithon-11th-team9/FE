import { twMerge } from "tailwind-merge";

interface LayoutProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	classNames?: string;
}

export default function Layout({ children, classNames }: LayoutProps) {
	return <section className={twMerge("w-mobile bg-black h-full", classNames)}>{children}</section>;
}
