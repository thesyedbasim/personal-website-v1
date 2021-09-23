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
