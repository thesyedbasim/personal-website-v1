import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/typography.scss';
import Navigation from '../components/nav/Navigation';
import TheFooter from '../components/footer/TheFooter';

import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';
import GoogleAnalyticsScripts from '../components/googleAnalytics/GoogleAnalyticsScripts';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />

			{process.env.NODE_ENV === 'production' ? (
				<GoogleAnalyticsScripts />
			) : (
				<div></div>
			)}

			<div className="container">
				<Navigation />
				<Component {...pageProps} />
				<TheFooter />
			</div>
		</>
	);
}

export default MyApp;
