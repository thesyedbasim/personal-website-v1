import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout, RowLayout } from '../layout/GridLayout';
import CtaText from './CtaText';
import CtaItemContainer from './CtaItemContainer';
import { SectionCopyWithDetails } from '../../types/CopyTypes';

const Cta = () => {
	const ctaSection: MutableRefObject<SectionCopyWithDetails> = useRef({
		title: 'Ready to Grow Online?',
		body: 'I hope you need no more convincing and showing what I can do! Grow online, Improve your Presence & Reach out to people!',
		items: [
			{
				icon: 'unique',
				title: 'Premium Designs',
				body: 'Get Distinctive Designs and Personalized Websites, Unique for your unique Needs.'
			},
			{
				icon: 'secure',
				title: 'Secure and Reliable',
				body: 'Websites are developed with Security and Great User Experience in mind.'
			}
		]
	});

	return (
		<section className="cta theme--default accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<ColumnLayout cols="2,1,1">
							<CtaText
								text={{
									title: ctaSection.current.title,
									body: ctaSection.current.body
								}}
							/>
							<CtaItemContainer items={ctaSection.current.items} />
						</ColumnLayout>
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Cta;
