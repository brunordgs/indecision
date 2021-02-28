import React from 'react';
import Modal from 'react-modal';

export default function ModalOption({ selectedOption, handleCloseModal }: any) {
	return (
		<>
			<Modal 
				isOpen={!!selectedOption}
				onRequestClose={handleCloseModal}
				contentLabel="Selected option"
				closeTimeoutMS={200}
				className="modal"
			>
				<h3 className="modal__title">Selected option</h3>
				{selectedOption && <p className="modal__content">{selectedOption}</p>}
				<button onClick={handleCloseModal} className="button">Okay</button>
			</Modal>
		</>
	);
}