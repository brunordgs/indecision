import { FormEvent, useState } from 'react';
import Button from './ui/Button';

type Props = {
	options: Array<string>;
	setOptions: (options: Array<string>) => void;
};

export default function InsertOption({ options, setOptions }: Props) {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState('');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		setInput('');

		const option = input.trim();

		if (!option) {
			return setMessages('Enter a valid value');
		} else if (options.indexOf(option) !== -1) {
			return setMessages('This option already exists');
		}

		if (options.length === 3) {
			return setMessages('Options limit exceeded :(');
		}

		setMessages('');

		return setOptions((options) => [...options, option]);
	}
	return (
		<>
			{messages && <p className="add-option-error">{messages}</p>}
			<form onSubmit={handleSubmit} className="add-option">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="add-option__input"
				/>
				<Button className="button">Add option</Button>
			</form>
		</>
	);
}
