import Head from 'next/head';
import { useEffect, useState } from 'react';
import Action from '../components/Action';
import InsertOption from '../components/InsertOption';
import Options from '../components/Options';
import Header from '../components/ui/Header';
import ModalOption from '../components/ui/Modal';

export default function Home() {
	const [options, setOptions] = useState<string[]>([]);
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

	function handleCloseModal() {
		return setSelectedOption(undefined);
	}

	return (
		<>
			<Head>
				<title>Home / Indecision</title>
			</Head>
			<Header
				title="Indecision"
				subtitle="Put your decision in the hands of a computer."
			/>
			<div className="container">
				<Action
					options={options}
					setSelectedOption={setSelectedOption}
				/>
				<div className="widget">
					<Options options={options} setOptions={setOptions} />
					<InsertOption options={options} setOptions={setOptions} />
				</div>
				<ModalOption
					selectedOption={selectedOption}
					handleCloseModal={handleCloseModal}
				/>
			</div>
		</>
	);
}