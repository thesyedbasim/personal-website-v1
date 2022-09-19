import { SectionContainer, SectionLayout } from '../layout/Section';
import styles from '../../styles/Navigation.module.scss';
import { CSSTransition } from 'react-transition-group';

import NavItem from './NavItem';
import NavLogo from './NavLogo';
import NavCta from './NavCta';
import NavOpen from './NavOpen';
import NavClose from './NavClose';

import { MutableRefObject, useRef } from 'react';
import { NavLinkType } from '../../types/NavTypes';

const NavigationBarLarge: React.FC<{
	navItems: MutableRefObject<NavLinkType[]>;
}> = ({ navItems }) => {
	return (
		<nav className={`${styles['navigation']} theme--default accent--blue`}>
			<SectionContainer variant="nav">
				<SectionLayout variant="nav">
					<ul className={styles['nav-container']}>
						<NavLogo />
						{navItems.current.map((navItem, index) => (
							<NavItem {...navItem} key={index} />
						))}
						<NavCta text={'Contact'} link={'/contact'} />
					</ul>
				</SectionLayout>
			</SectionContainer>
		</nav>
	);
};

const NavigationBarSmall: React.FC<{
	navItems: MutableRefObject<NavLinkType[]>;
	navVisibility: boolean;
	navToggle: [() => void, () => void];
}> = ({ navItems, navVisibility, navToggle }) => {
	const [openNav, closeNav] = navToggle;

	return (
		<nav
			className={`${styles['navigation--small']} theme--default accent--blue`}
		>
			<SectionContainer variant="nav">
				<SectionLayout variant="nav">
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(2, 1fr)',
							alignItems: 'center',
							width: '100%'
						}}
					>
						<ul style={{ listStyle: 'none' }}>
							<NavLogo variant="small" />
						</ul>
						<CSSTransition
							classNames="nav-open-menu"
							in={!navVisibility}
							timeout={0}
						>
							<NavOpen openNav={openNav} />
						</CSSTransition>
						<CSSTransition
							classNames="nav-container"
							in={navVisibility}
							timeout={500}
							unmountOnExit
						>
							<ul className={styles['nav-container--small']}>
								<NavClose closeNav={closeNav} />
								{navItems.current.map((navItem, index) => (
									<NavItem
										{...navItem}
										key={index}
										closeNav={() => setTimeout(closeNav, 0)}
									/>
								))}
								<NavCta
									text={'Contact'}
									link={'/contact'}
									closeNav={() => setTimeout(closeNav, 0)}
								/>
							</ul>
						</CSSTransition>
					</div>
				</SectionLayout>
			</SectionContainer>
		</nav>
	);
};

const NavigationBar = ({ variant, navVisibility, navToggle }) => {
	const navItems: MutableRefObject<NavLinkType[]> = useRef([
		{ text: 'Services', link: { type: 'internal', url: '/#services' } },
		{ text: 'Why me', link: { type: 'internal', url: '/#why-me' } },
		{
			text: 'GitHub',
			link: { type: 'external', url: 'https://github.com/thesyedbasim' }
		},
		{
			text: 'Portfolio',
			link: { type: 'external', url: 'https://fueler.io/syedbasim' }
		},
		{
			text: 'Blog',
			link: { type: 'external', url: 'https://blog.syedbasim.com' }
		},
		{ text: 'Newsletter', link: { type: 'internal', url: '/#newsletter' } }
	]);

	if (variant === 'small')
		return (
			<NavigationBarSmall
				navItems={navItems}
				navVisibility={navVisibility}
				navToggle={navToggle}
			/>
		);

	return <NavigationBarLarge navItems={navItems} />;
};

export default NavigationBar;
