import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { SectionContainer, SectionLayout } from '../components/layout/Section';
import {
	Copy,
	CopyBody,
	CopyHeader,
	CopyTextItem,
	CopyTitle
} from '../components/base/copy/Copy';
import ContactForm from '../components/contact/ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NextSeo } from 'next-seo';

const Contact = () => {
	const SEO = useRef({
		title: 'Contact a Website & UI/UX Designer Freelancer | Syed Basim',
		description:
			'If you want grow your online presence with a great and reliable webiste, you can contact me and I would help you increase your sales and your business.',
		url: 'https://syedbasim.com/contact',
		canonical: 'https://syedbasim.com/contact',
		openGraph: {
			url: 'https://syedbasim.com/contact'
		}
	});

	const contactSection = useRef({
		title: 'Contact',
		body: "If you're interested to do business with me and would like to grow your online presence, you can fill up the form and I will be ready to carefully arrange the quote according to your needs. Or, you can send an email regarding the project.",
		contact: [
			{
				text: 'business@syedbasim.com'
			}
		]
	});

	const [error, setError] = useState(null);
	const [sent, setSent] = useState(false);

	const showSuccess = () => {
		toast.success('Your request was successfully submitted!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const showError = () => {
		toast.error(error, {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	useEffect(() => {
		if (sent === true && error === false) {
			showSuccess();
			setSent(false);
		}
	}, [sent, error]);

	useEffect(() => {
		if (error) {
			showError();
			setError(false);
		}
	}, [error]);

	return (
		<>
			<NextSeo {...SEO.current} />
			<SectionContainer>
				<SectionLayout>
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

					<div className="column-layout" data-columns="1,1">
						<div className="row-layout">
							<Copy variant="footer">
								<CopyHeader>
									<CopyTitle text={contactSection.current.title} />
								</CopyHeader>
								<CopyBody text={contactSection.current.body} />
								{contactSection.current.contact.map((contactItem, index) => (
									<CopyTextItem {...contactItem} key={index} />
								))}
							</Copy>
						</div>
						<div className="row-layout">
							<ContactForm sentSetter={setSent} errorSetter={setError} />
						</div>
					</div>
				</SectionLayout>
			</SectionContainer>
		</>
	);
};

export default Contact;
