import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/typography.scss';
import Navigation from '../components/nav/Navigation';
import TheFooter from '../components/footer/TheFooter';

import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<div className="container">
				<Navigation />
				<Component {...pageProps} />
				<TheFooter />
			</div>
		</>
	);
}

export default MyApp;
