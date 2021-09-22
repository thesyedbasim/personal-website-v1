import styles from '../../styles/Navigation.module.scss';

const NavOpen: React.FC<{ openNav: () => void }> = ({ openNav }) => {
	return (
		<svg className={styles['nav-open-menu']} onClick={() => openNav()}>
			<use href="/assets/sprite.svg#nav-open"></use>
		</svg>
	);
};

export default NavOpen;
