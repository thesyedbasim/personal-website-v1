import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/typography.scss';
import Navigation from '../components/nav/Navigation';
import TheFooter from '../components/footer/TheFooter';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="container">
				<Navigation />
				<Component {...pageProps} />
				<TheFooter />
			</div>
		</>
	);
}

export default MyApp;
