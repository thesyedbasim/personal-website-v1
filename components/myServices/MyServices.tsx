import { MutableRefObject, useRef } from 'react';
import { SectionCopyWithImage } from '../../types/CopyTypes';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import MyServiceItem from './MyServiceItem';

const MyServices = () => {
	const myServices: MutableRefObject<SectionCopyWithImage[]> = useRef([
		{
			caption: 'Website Development',
			title: 'Enhance your online presence',
			body: 'Having a great website is really important for online presence. Whether you are a blogger, a content creator, or started a company, a stunning customer drags your customers attention.',
			cta: [
				{
					text: 'Get Website',
					type: 'button',
					link: { type: 'internal', url: '/contact?work=web-dev' }
				}
			],
			image: {
				url: '/assets/web-dev-mockup.svg',
				alt: 'web devevelopment mockup',
				properties: {
					width: 2030,
					height: 1191
				}
			}
		},
		{
			caption: 'UI/UX Design',
			title: 'App designs that stand out',
			body: 'I create prototypes for your Mobile App or a Website. I strive for perfection. Having a mindset for great design and friendly user experience, I make sure my clients are satisfied with my prototypes.',
			cta: [
				{
					text: 'Get Design',
					type: 'button',
					link: { type: 'internal', url: '/contact?work=design' }
				}
			],
			image: {
				url: '/assets/ui-design-mockup.svg',
				alt: 'ui design mockup',
				properties: {
					width: 542,
					height: 581
				}
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
