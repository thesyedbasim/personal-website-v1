import { useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout, RowLayout } from '../layout/GridLayout';
import CtaText from './CtaText';
import CtaItemContainer from './CtaItemContainer';

const Cta = () => {
	const ctaSection = useRef({
		title: 'Ready to grow online?',
		body: 'I hope you need no more convincing and showing what I can do! Grow online, improve your presence & reach out to people!'
	});

	const ctaItems = useRef([
		{
			icon: 'unique',
			title: 'Premium Designs',
			body: 'Get distinctive designs and personalized websites, unique for your unique needs.'
		},
		{
			icon: 'secure',
			title: 'Secure and Reliable',
			body: 'Websites which are developed with security and great user experience in mind.'
		}
	]);

	return (
		<section className="cta theme--white accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<ColumnLayout cols="2,1,1">
							<CtaText text={ctaSection} />
							<CtaItemContainer items={ctaItems} />
						</ColumnLayout>
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Cta;
