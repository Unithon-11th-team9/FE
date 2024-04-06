import MbtiCard from "@/components/MbtiCard";

export default function MbtiCardGrid({
	mbtis,
}: {
	mbtis: {
		E: string;
		F: string;
		I: string;
		T: string;
	};
}) {
	return (
		<div className="grid grid-cols-2 place-items-center w-[335px] h-[420px] m-5 gap-4">
			<MbtiCard name={mbtis.E} type="E" />
			<MbtiCard name={mbtis.I} type="I" />
			<MbtiCard name={mbtis.F} type="F" />
			<MbtiCard name={mbtis.T} type="T" />
		</div>
	);
}
