import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function ResultPage() {
	return (
		<Layout>
			<section className="flex">
				<Card name="조유나" type="good" />
				<Card name="조유나" type="bad" />
			</section>
		</Layout>
	);
}
