import Option from './Option';
import Button from './ui/Button';

type Props = {
	options: string[];
	setOptions: (options: string[]) => void;
};

export default function Options({ options, setOptions }: Props) {
	return (
		<>
			<div className="widget-header">
				<div>
					<h3>Your options</h3>
					<span>{options.length} / 3</span>
				</div>
				<Button onClick={() => setOptions([])} className="button--link">
					Remove all
				</Button>
			</div>
			<Option options={options} setOptions={setOptions} />
		</>
	);
}
