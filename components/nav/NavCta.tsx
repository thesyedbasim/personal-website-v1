import Link from 'next/link';
import Button from '../base/Button';
import styles from '../../styles/Navigation.module.scss';

const NavCta = ({ text, link, closeNav }) => {
	return (
		<li
			className={`${styles['nav-item']} ${styles['nav-item--right']}`}
			onClick={closeNav}
		>
			<Link href={link}>
				<a className={`${styles['nav-link']} ${styles['nav-cta']}`}>
					<Button text={text} />
				</a>
			</Link>
		</li>
	);
};

export default NavCta;