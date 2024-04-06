import Layout from "@/components/Layout";
import Reward from "./components/Reward";
import Report from "./components/Report";
import { useParams } from "react-router-dom";
import useGetAwardResult from "@/quries/useGetAwardResult";

export default function ResultPage() {
	const { id } = useParams();
	const { data } = useGetAwardResult(Number(id));

	if (!data) return <></>;

	return (
		<Layout>
			<Reward />
			<Report />
		</Layout>
	);
}
