import React from 'react';
import Modal from 'react-modal';

export default function ModalOption({ selectedOption, handleCloseModal }) {
	return (
		<>
			<Modal 
				isOpen={!!selectedOption}
				onRequestClose={handleCloseModal}
				contentLabel="Selected option"
			>
				<h3>Selected option</h3>
				{selectedOption && <p>{selectedOption}</p>}
				<button onClick={handleCloseModal}>Okay</button>
			</Modal>
		</>
	);
}