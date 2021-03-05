import { default as ModalOption } from 'react-modal';
import Button from './Button';

type Props = {
	selectedOption: string | any;
	handleCloseModal: () => void;
};

export default function Modal({ selectedOption, handleCloseModal }: Props) {
	return (
		<>
			<ModalOption
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
				<Button onClick={handleCloseModal}>Okay</Button>
			</ModalOption>
		</>
	);
}
