import Options from "../components/Options";
import Header from "../components/ui/Header";

export default function Home() {
	return (
		<>
			<Header
				title="Indecision"
				subtitle="Put your decision in the hands of a computer."
			/>
			<div className="container">
				<Options />
			</div>
		</>
	);
}