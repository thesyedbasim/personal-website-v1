import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../components/layout/Section';
import ContactForm from '../components/contact/ContactForm';
import { ToastContainer } from 'react-toastify';

import { NextSeo } from 'next-seo';
import { ColumnLayout, RowLayout } from '../components/layout/GridLayout';
import ContactText from '../components/contact/ContactText';
import { SectionCopyHeader } from '../types/CopyTypes';

const Contact = () => {
	const SEO = useRef({
		title: 'Contact a Website & UI/UX Designer Freelancer | Syed Basim',
		description:
			'If you want grow your online presence with a great and reliable webiste, you can contact me and I would help you increase your sales and your business.',
		url: 'https://www.syedbasim.com/contact',
		canonical: 'https://www.syedbasim.com/contact',
		openGraph: {
			url: 'https://www.syedbasim.com/contact'
		}
	});

	interface ContactTextProps extends SectionCopyHeader {
		contact: { text: string }[];
	}

	const contactSection: MutableRefObject<ContactTextProps> = useRef({
		title: 'Contact',
		body: "If you're interested to do business with me and would like to grow your online presence, you can fill up the form and I will be ready to carefully arrange the quote according to your needs.",
		contact: [
			{
				text: 'business@syedbasim.com'
			}
		]
	});

	return (
		<>
			<NextSeo {...SEO.current} />

			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<SectionContainer>
				<SectionLayout>
					<ColumnLayout cols="1,1">
						<ContactText {...contactSection.current} />
						<RowLayout>
							<ContactForm />
						</RowLayout>
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</>
	);
};

export default Contact;
