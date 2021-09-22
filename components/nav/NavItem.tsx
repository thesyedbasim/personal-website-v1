import Link from 'next/link';
import styles from '../../styles/Navigation.module.scss';

const NavItem = ({ text, extLink, link, closeNav }) => {
	if (extLink) return <NavExternalLink {...{ text, extLink, closeNav }} />;

	return <NavNativeLink {...{ text, link, closeNav }} />;
};

function NavNativeLink({ text, link, closeNav }) {
	return (
		<li className={styles['nav-item']} onClick={closeNav}>
			<Link href={link}>
				<a className={styles['nav-link']}>{text}</a>
			</Link>
		</li>
	);
}

function NavExternalLink({ text, extLink, closeNav }) {
	return (
		<li className={styles['nav-item']} onClick={closeNav}>
			<a
				href={extLink}
				target="_blank"
				rel="noopener noreferrer"
				className={styles['nav-link']}
			>
				{text}
			</a>
		</li>
	);
}

export default NavItem;
