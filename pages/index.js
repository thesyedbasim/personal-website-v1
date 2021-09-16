import { useRef, useEffect } from 'react';
import Head from 'next/head';

import Cta from '../components/cta/Cta';
import Header from '../components/header/Header';
import MyServices from '../components/myServices/MyServices';
import Newsletter from '../components/newsletter/Newsletter';
import TechStack from '../components/techStack/TechStack';
import WhyMe from '../components/whyMe/WhyMe';

export default function Home() {
	useEffect(() => {
		document.documentElement.lang = 'en';
	}, []);

	const seo = useRef({
		title: 'Get Cheap and Reliable Websites to Grow Online',
		description:
			'Cheaply enhance and grow your online presence by increasing conversion rates and high SEO. You get fast, functional and beautiful websites to help you with that.',
		url: 'https://syedbasim.com',
		image: '/assets/social-media.jpg',
		twitterUsername: '@syedbasim',
		twitterCard: 'summary',
		type: 'website'
	});

	return (
		<>
			<Head>
				<title>{seo.current.title}</title>
				<meta name="description" content={seo.current.description} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<meta property="og:title" content={seo.current.title} />
				<meta property="og:description" content={seo.current.description} />
				<meta property="og:type" content={seo.current.type} />
				<meta property="og:site_name" content={seo.current.title} />
				<meta property="og:image" content={seo.current.image} />
				<meta property="og:url" content={seo.current.url} />

				<meta name="twitter:card" content={seo.current.twitterCard} />
				<meta name="twitter:site" content={seo.current.twitterUsername} />
				<meta name="twitter:title" content={seo.current.title} />
				<meta name="twitter:description" content={seo.current.description} />
				<meta name="twitter:image" content={seo.current.image} />
			</Head>
			<Header />
			<main>
				<WhyMe />
				<MyServices />
				<TechStack />
				<Newsletter />
				<Cta />
			</main>
		</>
	);
}
