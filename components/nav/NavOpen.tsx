import styles from '../../styles/Navigation.module.scss';
import { NavFn } from '../../types/NavTypes';

const NavOpen: React.FC<{ openNav: NavFn }> = ({ openNav }) => {
	return (
		<svg className={styles['nav-open-menu']} onClick={() => openNav()}>
			<use href="/assets/sprite.svg#nav-open"></use>
		</svg>
	);
};

export default NavOpen;
