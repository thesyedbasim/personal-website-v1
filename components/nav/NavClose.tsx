import styles from '../../styles/Navigation.module.scss';

const NavClose: React.FC<{ closeNav: () => void }> = ({ closeNav }) => {
	return (
		<svg className={styles['nav-close-menu']} onClick={() => closeNav()}>
			<use href="/assets/sprite.svg#nav-close"></use>
		</svg>
	);
};

export default NavClose;
