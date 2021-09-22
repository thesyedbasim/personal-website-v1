// interface OpenGraphImagesTypes {
// 	url: string;
// 	alt: string;
// 	type: 'image/jpeg';
// 	width: string;
// 	height: string;
// }

// interface OpenGraphTypes {
// 	type: 'website';
// 	locale: 'en_US';
// 	images: OpenGraphImagesTypes[];
// 	site_name: string;
// }

// interface TwitterTypes {
// 	handle: string;
// 	site: string;
// 	cardType: 'summary' | 'summary_large_image';
// }

// interface DefaultSEOTypes {
// 	author: string;
// 	openGraph: OpenGraphTypes;
// 	twitter: TwitterTypes;
// }

import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
	openGraph: {
		type: 'website',
		locale: 'en_US',
		images: [
			{
				url: 'https://syedbasim.com/assets_pub/social-media.jpg',
				alt: 'Syed Basim Initials',
				type: 'image/jpeg',
				width: 1300,
				height: 1300
			}
		],
		site_name: 'SyedBasim'
	},
	twitter: {
		handle: '@syedbasim',
		site: '@syedbasim',
		cardType: 'summary'
	}
};

export default SEO;
