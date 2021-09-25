import Link from 'next/link';
import Button from '../base/Button';
import styles from '../../styles/Navigation.module.scss';

const NavCta: React.FC<{ text: string; link: string; closeNav?: () => void }> =
	({ text, link, closeNav }) => {
		return (
			<li
				className={`${styles['nav-item']} ${styles['nav-item--right']}`}
				onClick={closeNav}
			>
				<Link href={link}>
					<a className={`${styles['nav-link']} ${styles['nav-cta']}`}>
						<Button type="button" text={text} />
					</a>
				</Link>
			</li>
		);
	};

export default NavCta;
