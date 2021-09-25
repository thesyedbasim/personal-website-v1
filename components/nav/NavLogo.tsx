import Link from 'next/link';
import styles from '../../styles/Navigation.module.scss';
import { NavVariant } from '../../types/NavTypes';

const NavLogo: React.FC<{ variant?: NavVariant }> = ({ variant }) => {
	return (
		<li className={`${styles['nav-item']} ${styles['nav-item-logo']}`}>
			<Link href="/">
				<a
					className={`${styles['nav-link']} ${
						styles[variant === 'small' ? 'nav-logo--small' : 'nav-logo']
					}`}
				>
					Syed Basim
				</a>
			</Link>
		</li>
	);
};

export default NavLogo;
