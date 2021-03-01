import Button from './ui/Button';

type Props = {
	options: Array<string>;
	setOptions: (options: Array<string>) => void;
};

export default function Option({ options, setOptions }: Props) {
	function handleRemoveOption(option: string) {
		return setOptions(options.filter((item) => item !== option));
	}

	return (
		<>
			{options.map((option, index) => {
				return (
					<div key={index} className="option">
						<span>{option.toLowerCase()}</span>
						<Button
							onClick={() => handleRemoveOption(option)}
							className="button--link"
						>
							Remove
						</Button>
					</div>
				);
			})}
		</>
	);
}
