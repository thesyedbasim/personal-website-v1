import { useRef } from 'react';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import WhyMeItemContainer from './WhyMeItemContainer';
import WhyMeText from './WhyMeText';

const WhyMe = () => {
	const whyMeSection = useRef({
		caption: 'Why Me',
		title: 'A customer-first approach to services and business'
	});

	const whyMeItems = useRef([
		{
			icon: 'perfect-design',
			title: 'Pixel perfect design',
			body: 'It’s really important to have a well designed and structured website & I’ve got you covered.'
		},
		{
			icon: 'on-time',
			title: 'On time delivery',
			body: 'I dedicate the work to my clients. I make sure to deliver the project on time with 100% satisfaction guarantee.'
		},
		{
			icon: 'seo',
			title: 'Good SEO',
			body: 'Having your website rank on the search engine list is essential to get your customers.'
		},
		{
			icon: 'support',
			title: 'Amazing support',
			body: 'Once your website is up and running, you might want additional help and revisions. And I am ready for that.'
		}
	]);

	return (
		<section id="why-me" className="why-me theme--grey accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<WhyMeText text={whyMeSection} />
						<WhyMeItemContainer items={whyMeItems} />
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default WhyMe;
