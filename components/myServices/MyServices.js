import { useRef } from 'react';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import MyServiceItem from './MyServiceItem';

const MyServices = () => {
	const myServices = useRef([
		{
			caption: 'Website Development',
			title: 'Enhance your online presence',
			body: 'Having a great website is really important for online presence. Whether you are a blogger, a content creator, or started a company, a stunning customer drags your customers attention.',
			cta: 'Get Website',
			ctaLink: '/contact?work=web-dev',
			picture: 'web-dev-mockup',
			imageProperties: {
				width: 2030,
				height: 1191
			}
		},
		{
			caption: 'UI/UX Design',
			title: 'App designs that stand out',
			body: 'I create prototypes for your Mobile App or a Website. I strive for perfection. Having a mindset for great design and friendly user experience, I make sure my clients are satisfied with my prototypes.',
			cta: 'Get Design',
			ctaLink: '/contact?work=design',
			picture: 'ui-design-mockup',
			imageProperties: {
				width: 542,
				height: 581
			}
		}
	]);

	return (
		<section className="my-services theme--white accent--blue" id="services">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						{myServices.current.map((myService, index) => (
							<MyServiceItem {...myService} position={index} key={index} />
						))}
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default MyServices;
