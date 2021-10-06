import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import NewsletterText from './NewsletterText';
import { ColumnLayout } from '../layout/GridLayout';
import NewsletterForm from './NewsletterForm';
import { SectionCopyHeader } from '../../types/CopyTypes';

const Newsletter = () => {
	const newsletterSection: MutableRefObject<SectionCopyHeader> = useRef({
		caption: 'My Weekly Newsletter',
		title: 'Productivity & Health directly in your Inbox',
		body: "Syed Basim's Weekly Digest is my Newsletter where I give all the Insights, Lessons I have learnt and Tips for Productivity and to Improve your Life."
	});

	return (
		<section className="newsletter theme--dark accent--blue" id="newsletter">
			<SectionContainer>
				<SectionLayout>
					<ColumnLayout cols="1,1">
						<NewsletterText newsletterText={newsletterSection.current} />
						<NewsletterForm />
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default Newsletter;
