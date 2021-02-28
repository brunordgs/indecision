import { FormEvent, useEffect, useState } from 'react';
import ModalOption from './ui/Modal';
import Button from './ui/Button';

export default function Options() {
	const [input, setInput] = useState('');
	const [options, setOptions] = useState<Array<string>>([]);
	const [messages, setMessages] = useState('');
	const [selectedOption, setSelectedOption] = useState<string | undefined>(
		undefined
	);

	useEffect(() => {
		const options = localStorage.getItem('options');

		if (options) {
			const json = JSON.parse(options);

			setOptions(json);
		}
	}, []);

	useEffect(() => {
		const json = JSON.stringify(options);

		localStorage.setItem('options', json);
	}, [options]);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		setInput('');

		const option = input.trim();

		if (!option) {
			return setMessages('Enter a valid value');
		} else if (options.indexOf(option) !== -1) {
			return setMessages('This option already exists');
		}

		setMessages('');

		return setOptions((options) => [...options, option]);
	}

	function handlePick() {
		const randomNumber = Math.floor(Math.random() * options.length);
		const option = options[randomNumber];

		setSelectedOption(option);
	}

	function handleRemoveOption(option: string) {
		return setOptions(options.filter((item) => item !== option));
	}

	function handleCloseModal() {
		return setSelectedOption(undefined);
	}

	return (
		<>
			<Button
				value="What should I do?"
				onClick={handlePick}
				disabled={!options.length}
				className="decision"
			/>

			<div className="widget-header">
				<h3>Your options</h3>
				<Button
					value="Remove all"
					onClick={() => setOptions([])}
					className="button--link"
				/>
			</div>

			<div className="widget">
				{options.length === 0 && (
					<p className="option__text">Add an option to get started</p>
				)}

				{options.map((option, index) => {
					return (
						<div key={index} className="option">
							<span>{option.toLowerCase()}</span>
							<button
								onClick={() => handleRemoveOption(option)}
								className="button--link"
							>
								Remove
							</button>
						</div>
					);
				})}

				{messages && <p className="add-option-error">{messages}</p>}
				<form onSubmit={handleSubmit} className="add-option">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="add-option__input"
					/>
					<Button value="Add option" className="button"/>
				</form>
			</div>
			<ModalOption
				selectedOption={selectedOption}
				handleCloseModal={handleCloseModal}
			/>
		</>
	);
}
