import React, { useEffect, useState } from 'react';
import ModalOption from './Modal';
import Button from './ui/Button';

export default function Options() {
	const [input, setInput] = useState('');
	const [options, setOptions] = useState([]);
	const [messages, setMessages] = useState('');
	const [selectedOption, setSelectedOption] = useState(undefined);

	useEffect(() => {
		const options = localStorage.getItem('options');
		const json = JSON.parse(options);

		if (options) {
			setOptions(json);
		}
	}, []);

	useEffect(() => {
		const json = JSON.stringify(options);

		localStorage.setItem('options', json);
	}, [options]);

	function handleSubmit(e) {
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

	function handleRemoveOption(option) {
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
			
			<Button
				value="Remove all"
				onClick={() => setOptions([])}
				className="button-link"
			/>

			<p>
				{options.length > 0
					? 'Your options'
					: 'Add an option to get started'}
			</p>

			{options.map((option, index) => {
				return (
					<div key={index}>
						<span>{option}</span>
						<button
							onClick={() => handleRemoveOption(option)}
							className="button-link"
						>
							Remove
						</button>
					</div>
				);
			})}

			{messages && messages}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onInput={(e) => setInput(e.target.value)}
				/>
				<button className="button">Add option</button>
			</form>

			<ModalOption
				selectedOption={selectedOption}
				handleCloseModal={handleCloseModal}
			/>
		</>
	);
}
