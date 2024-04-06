import { twMerge } from "tailwind-merge";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	classNames?: string;
}

export default function Layout({ children, classNames, ...props }: LayoutProps) {
	return (
		<section className={twMerge("w-mobile bg-black h-full", classNames)} {...props}>
			{children}
		</section>
	);
}
