import { useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import NewsletterText from './NewsletterText';
import { ColumnLayout } from '../layout/GridLayout';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
	const newsletterSection = useRef({
		caption: 'My Weekly Newsletter',
		title: 'Productivity directly in your inbox',
		body: "Syed Basim's Weekly Digest is a newsletter where I give all the insights, the lessons I have learnt and tips for productivity and to improve your life."
	});

	return (
		<section className="newsletter theme--grey accent--blue" id="newsletter">
			<SectionContainer>
				<SectionLayout>
					<ColumnLayout cols="1,1">
						<NewsletterText newsletterText={newsletterSection} />
						<NewsletterForm />
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Newsletter;
