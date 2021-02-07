import React from 'react';
import Header from './components/ui/Header';
import Options from './components/Options';

export default function App() {
	return (
		<>
			<Header
				title="Indecision"
				subtitle="Put your decision in the hands of a computer."
			/>
			<Options />
		</>
	);
}
