import styles from '../../styles/backdrop.module.scss';

const Backdrop = ({ closeNav }) => {
	return <div className={styles.backdrop} onClick={closeNav}></div>;
};

export default Backdrop;
