import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { SectionContainer, SectionLayout } from '../components/layout/Section';
import ContactForm from '../components/contact/ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NextSeo } from 'next-seo';
import { ColumnLayout } from '../components/layout/GridLayout';
import ContactText from '../components/contact/ContactText';

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

	interface ContactTextProps {
		title: string;
		body: string;
		contact: { text: string }[];
	}

	const contactSection: MutableRefObject<ContactTextProps> = useRef({
		title: 'Contact',
		body: "If you're interested to do business with me and would like to grow your online presence, you can fill up the form and I will be ready to carefully arrange the quote according to your needs. Or, you can send an email regarding the project.",
		contact: [
			{
				text: 'business@syedbasim.com'
			}
		]
	});

	const [error, setError] = useState<boolean | null>(null);
	const [sent, setSent] = useState<boolean>(false);

	useEffect(() => {
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

		if (sent === true && error === false) {
			showSuccess();
			setSent(false);
		}
	}, [sent, error]);

	useEffect(() => {
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

					<ColumnLayout cols="1,1">
						<ContactText {...contactSection.current} />
						<div className="row-layout">
							<ContactForm sentSetter={setSent} errorSetter={setError} />
						</div>
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</>
	);
};

export default Contact;
