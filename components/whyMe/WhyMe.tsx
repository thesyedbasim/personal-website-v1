import { MutableRefObject, useRef } from 'react';
import { SectionCopyWithDetails } from '../../types/CopyTypes';
import { RowLayout } from '../layout/GridLayout';
import { SectionContainer, SectionLayout } from '../layout/Section';
import WhyMeItemContainer from './WhyMeItemContainer';
import WhyMeText from './WhyMeText';

const WhyMe = () => {
	const whyMeSection: MutableRefObject<SectionCopyWithDetails> = useRef({
		caption: 'Why Me',
		title: 'A Customer-first approach to Web Services and Business',
		items: [
			{
				icon: 'perfect-design',
				title: 'Pixel Perfect Design',
				body: 'A Well Design and Structure is the heart of any Website. It helps gain Trust and users willing to Convert more.'
			},
			{
				icon: 'on-time',
				title: 'On Time Delivery',
				body: 'I dedicate the work to my Clients. I make sure to deliver the Project on Time with 100% Satisfaction Guarantee.'
			},
			{
				icon: 'seo',
				title: 'Good SEO',
				body: 'Ranking Higher on Google along with a Great Website is Essential to get more Impressions and Conversions.'
			},
			{
				icon: 'support',
				title: 'Amazing Support',
				body: "After having your Website Up and Running, the work doesn't stop there, I also help you with additional Revisions."
			}
		]
	});

	return (
		<section id="why-me" className="why-me theme--dark accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<WhyMeText
							text={{
								caption: whyMeSection.current.caption,
								title: whyMeSection.current.title
							}}
						/>
						<WhyMeItemContainer items={whyMeSection.current.items} />
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default WhyMe;
