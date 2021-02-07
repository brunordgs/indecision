import React, { useState } from 'react';

export default function Options() {
	const [input, setInput] = useState('');
	const [options, setOptions] = useState([]);

	function handlePick() {
		const randomNumber = Math.floor(Math.random() * options.length);
		const option = options[randomNumber];

		alert(option);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const option = input.trim();

		if (!option) {
			return alert('Enter a valid value');
		} else if (options.indexOf(option) !== -1) {
			return alert('This option already exists');
		}

		return setOptions((options) => [...options, option]);
	}

	function handleDeleteOption(option) {
		return setOptions(options.filter((item) => item !== option));
	}

	return (
		<>
			<button onClick={handlePick} disabled={!options.length}>
				What should I do?
			</button>

			<button onClick={() => setOptions([])}>Remove all</button>
			<p>{options.length > 0 ? 'Your options' : 'No options'}</p>

			{options.map((option, index) => {
				return (
					<div key={index}>
						<span>{option}</span>
						<button onClick={() => handleDeleteOption(option)}>
							Delete
						</button>
					</div>
				);
			})}

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onInput={(e) => setInput(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</>
	);
}
