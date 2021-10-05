import '../styles/globals.scss';
import '../styles/layout.scss';
import '../styles/typography.scss';
import Navigation from '../components/nav/Navigation';
import TheFooter from '../components/footer/TheFooter';

import { DefaultSeo } from 'next-seo';
import SEO from '../lib/next-seo';

import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-WEDXM46JZK"
			/>
			<Script
				id="googleAnalyticsScript"
				dangerouslySetInnerHTML={{
					__html: `
										window.dataLayer = window.dataLayer || [];

										function gtag() {
											dataLayer.push(arguments);
										}
										gtag('js', new Date());

										gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
								`
				}}
			/>
			<div className="container">
				<Navigation />
				<Component {...pageProps} />
				<TheFooter />
			</div>
		</>
	);
}

export default MyApp;
