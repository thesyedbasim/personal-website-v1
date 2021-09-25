import styles from '../../styles/Navigation.module.scss';
import { NavFn } from '../../types/NavTypes';

const NavClose: React.FC<{ closeNav: NavFn }> = ({ closeNav }) => {
	return (
		<svg className={styles['nav-close-menu']} onClick={() => closeNav()}>
			<use href="/assets/sprite.svg#nav-close"></use>
		</svg>
	);
};

export default NavClose;
