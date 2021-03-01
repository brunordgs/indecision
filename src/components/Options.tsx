import Option from './Option';
import Button from './ui/Button';

type Props = {
	options: Array<string>;
	setOptions: (options: Array<string>) => void;
};

export default function Options({ options, setOptions }: Props) {
	return (
		<>
			<div className="widget-header">
				<h3>Your options</h3>
				<Button onClick={() => setOptions([])} className="button--link">
					Remove all
				</Button>
			</div>

				{options.length === 0 && (
					<p className="option__text">Add an option to get started</p>
				)}

				<Option options={options} setOptions={setOptions} />
		</>
	);
}
