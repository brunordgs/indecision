import Button from './ui/Button';

type Props = {
	options: Array<string>;
	setSelectedOption: (option: string) => void;
};

export default function Action({ options, setSelectedOption }: Props) {
	function handlePick() {
		const randomNumber = Math.floor(Math.random() * options.length);
		const option = options[randomNumber];

		return setSelectedOption(option);
	}
	return (
		<Button
			onClick={handlePick}
			disabled={!options.length}
			className="decision"
		>
			What should I do?
		</Button>
	);
}
