import styles from '../../styles/backdrop.module.scss';

const Backdrop: React.FC<{ closeNav?: () => void }> = ({ closeNav }) => {
	return <div className={styles.backdrop} onClick={closeNav}></div>;
};

export default Backdrop;
