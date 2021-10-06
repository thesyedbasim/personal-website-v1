import { MutableRefObject, useRef } from 'react';
import { SectionCopyWithImage } from '../../types/CopyTypes';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import MyServiceItem from './MyServiceItem';

const MyServices = () => {
	const myServices: MutableRefObject<SectionCopyWithImage[]> = useRef([
		{
			caption: 'Website Development',
			title: 'Enhance your Online Presence and Conversions',
			body: "A Fast and Great Website is de facto step to Grow Online and Increase Conversions. Whether you are a Blogger, a Content Creator, a Startup or an Enterprise, a Stunning Website drags your User's attention.",
			cta: [
				{
					text: 'Get Website',
					type: 'button',
					link: { type: 'internal', url: '/contact?work=web-dev' }
				}
			],
			image: {
				url: '/assets/web-dev-mockup.svg',
				alt: 'web development mockup',
				properties: {
					width: 2030,
					height: 1191
				}
			}
		},
		{
			caption: 'UI/UX Design',
			title: 'Beautiful UI Designs with Great User Experience',
			body: 'You get Modern Designs and Prototypes for your next potential Website or Mobile app, or just Improve your existing one! Having a mindset for Great Design and Friendly User Experience, you will be Satisfied by the Designs.',
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
