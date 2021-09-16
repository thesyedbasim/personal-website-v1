import styles from '../../styles/Modal.module.scss';
import Backdrop from '../backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Modal = ({ type, payload }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<CSSTransition
				in={isModalOpen}
				timeout={0}
				classNames={'backdrop'}
				unmountOnExit
			>
				<Backdrop />
			</CSSTransition>

			<CSSTransition
				in={isModalOpen}
				timeout={0}
				classNames={'modal'}
				unmountOnExit
			>
				{type === 'feedback' ? (
					<ModalFeedback payload={payload} closeModal={closeModal} />
				) : null}
			</CSSTransition>
		</>
	);
};

function ModalFeedback({ payload, closeModal }) {
	const iconClass = `icon--${payload.type}`;

	setTimeout(closeModal, 1500);

	return (
		<dialog className={styles['base-modal-feedback']}>
			<svg className={`${styles['icon']} ${iconClass}`}>
				<use href={`/assets/sprite.svg#feedback-${payload.type}`}></use>
			</svg>
			<p className={styles['modal-caption-big']}>{payload.text}</p>
		</dialog>
	);
}

export default Modal;
