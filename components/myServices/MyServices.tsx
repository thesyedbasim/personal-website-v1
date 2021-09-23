import { MutableRefObject, useRef } from 'react';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import MyServiceItem from './MyServiceItem';

interface ServiceItemProperties {
	caption: string;
	title: string;
	body: string;
	cta: {
		text: string;
		type?: 'button' | 'link';
		link: {
			type: 'internal' | 'external';
			url: string;
		};
	}[];
	picture: string;
	imageProperties: {
		width: number;
		height: number;
	};
}

const MyServices = () => {
	const myServices: MutableRefObject<ServiceItemProperties[]> = useRef([
		{
			caption: 'Website Development',
			title: 'Enhance your online presence',
			body: 'Having a great website is really important for online presence. Whether you are a blogger, a content creator, or started a company, a stunning customer drags your customers attention.',
			cta: [
				{
					text: 'Get Website',
					link: { type: 'internal', url: '/contact?work=web-dev' }
				}
			],
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
			cta: [
				{
					text: 'Get Website',
					link: { type: 'internal', url: '/contact?work=design' }
				}
			],
			picture: 'ui-design-mockup',
			imageProperties: {
				width: 542,
				height: 581
			}
		}
	]);

	return (
		<section className="my-services theme--default accent--blue" id="services">
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
