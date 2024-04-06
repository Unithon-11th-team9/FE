type MbtiCardProps = {
	name: string;
	type: "E" | "I" | "F" | "T";
};

export default function MbtiCard({ name, type }: MbtiCardProps) {
	return (
		<article className="w-[158px] h-[119px]rounded-[30px] flex flex-col justify-center items-center text-xl gap-[0.1rem]">
			<h1>
				너 <span className="text-point">{type}</span>야?
			</h1>
			<p className="text-xs">말을 가장 많이한 사람</p>
			<p className="text-point mt-1">{name}</p>
		</article>
	);
}
