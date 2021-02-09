import React from 'react';
import Header from './components/Header';
import Options from './components/Options';

export default function App() {
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
