import BadCard from "./components/BadCard";
import Card from "./components/Card";
import Layout from "./components/Layout";
import MbtiCard from "./components/MbtiCard";

function App() {
	return (
		<Layout>
			<h1 className="text-3xl underline text-white font-[SBAggroM]">Hello world!</h1>
			<h1 className="text-3xl underline text-white font-[SBAggroL]">Hello world!</h1>
			<Card />
			<BadCard />
			<MbtiCard />
		</Layout>
	);
}

export default App;
