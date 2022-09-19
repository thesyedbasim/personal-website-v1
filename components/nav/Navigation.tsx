import Backdrop from '../backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';

import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';

const Navigation = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [navSize, setNavSize] = useState('small');
	const [navVisible, setNavVisible] = useState(false);

	const openNav = () => {
		setNavVisible(true);
	};

	const closeNav = () => {
		setNavVisible(false);
	};

	if (process.browser) {
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
	}

	useEffect(() => {
		if (process.browser) {
			if (window.innerWidth > 1000) {
				setNavSize('large');
			} else {
				setNavSize('small');
			}
		}
	}, [windowWidth]);

	return (
		<>
			<CSSTransition
				classNames="nav-backdrop"
				in={navVisible}
				timeout={0}
				unmountOnExit
			>
				<Backdrop closeNav={closeNav} />
			</CSSTransition>

			<NavigationBar
				variant={navSize}
				navVisibility={navVisible}
				navToggle={[openNav, closeNav]}
			/>
		</>
	);
};

export default Navigation;
