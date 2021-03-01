import Modal from 'react-modal';
import Button from './Button';

type Props = {
	selectedOption: string | any;
	handleCloseModal: () => void;
}

export default function ModalOption({ selectedOption, handleCloseModal }: Props) {
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
				{selectedOption && (
					<p className="modal__content">
						{selectedOption.toLowerCase()}
					</p>
				)}
				<Button onClick={handleCloseModal} className="button">
					Okay
				</Button>
			</Modal>
		</>
	);
}
