
import BadCard from "./components/BadCard";
import Card from "./components/Card";
import MbtiCard from "./components/MbtiCard";

function App() {
	return (
		<div className="flex gap-x-11">
			<h1 className="text-3xl underline font-[300]">Hello world!</h1>
			<Card />
			<BadCard />
			<MbtiCard />
		</div>
	);
}

export default App;
