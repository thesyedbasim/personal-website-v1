import Script from 'next/script';

const GoogleAnalyticsScripts = () => {
	return (
		<>
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
		</>
	);
};

export default GoogleAnalyticsScripts;
