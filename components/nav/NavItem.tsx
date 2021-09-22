import Link from 'next/link';
import styles from '../../styles/Navigation.module.scss';

interface LinkType {
	type: 'internal' | 'external';
	url: string;
}

interface NavLinkType {
	text: string;
	link: LinkType;
	closeNav?: () => void;
}

const NavNativeLink: React.FC<NavLinkType> = ({ text, link, closeNav }) => {
	return (
		<li className={styles['nav-item']} onClick={closeNav}>
			<Link href={link.url}>
				<a className={styles['nav-link']}>{text}</a>
			</Link>
		</li>
	);
};

const NavExternalLink: React.FC<NavLinkType> = ({ text, link, closeNav }) => {
	return (
		<li className={styles['nav-item']} onClick={closeNav}>
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				className={styles['nav-link']}
			>
				{text}
			</a>
		</li>
	);
};

const NavItem: React.FC<NavLinkType> = (props) => {
	if (props.link.type === 'external') return <NavExternalLink {...props} />;

	return <NavNativeLink {...props} />;
};

export default NavItem;
