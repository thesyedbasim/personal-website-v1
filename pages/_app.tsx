import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/typography.scss';
import Navigation from '../components/nav/Navigation';
import TheFooter from '../components/footer/TheFooter';

import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-WEDXM46JZK"
				></script>
				<script src="../lib/googleAnalyticsScript" lang="ts"></script>
			</Head>
			<div className="container">
				<Navigation />
				<Component {...pageProps} />
				<TheFooter />
			</div>
		</>
	);
}

export default MyApp;
