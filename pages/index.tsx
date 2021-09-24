import { useRef, useEffect } from 'react';
import { NextSeo } from 'next-seo';

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

	const SEO = useRef({
		title: 'Get Cheap and Reliable Websites to Grow Online',
		description:
			'Cheaply enhance and grow your online presence by increasing conversion rates and high SEO. You get fast, functional and beautiful websites to help you with that.',
		url: 'https://www.syedbasim.com',
		canonical: 'https://www.syedbasim.com',
		openGraph: {
			url: 'https://www.syedbasim.com'
		}
	});

	return (
		<>
			<NextSeo {...SEO.current} />
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
