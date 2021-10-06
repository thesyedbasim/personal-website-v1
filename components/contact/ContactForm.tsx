import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import { addData } from '../../lib/firebase';
import * as emailValidator from 'email-validator';

const ContactForm = () => {
	const [canSubmit, setCanSubmit] = useState(false);

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [topic, setTopic] = useState('web-dev');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [error, setError] = useState<boolean | string | null>(null);
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

		if (sent === true && !error) {
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

	const handleSubmitForm = async (e: FormEvent) => {
		e.preventDefault();

		setCanSubmit(false);

		const err = await addData('work-contact', {
			fullName,
			email,
			topic,
			subject,
			message
		});

		if (!err) {
			setFullName('');
			setEmail('');
			setSubject('');
			setMessage('');

			return setSent(true);
		}

		if (err)
			setError(
				'There was some error sending the request. Please try again later.'
			);
		else setError(false);
	};

	useEffect(() => {
		if (
			fullName.trim() &&
			email.trim() &&
			topic &&
			subject.trim() &&
			message.trim()
		)
			setCanSubmit(true);
		else setCanSubmit(false);

		if (!emailValidator.validate(email.trim())) setCanSubmit(false);
	}, [fullName, email, topic, subject, message]);

	const router = useRouter();

	useEffect(() => {
		const { work } = router.query;

		if (work === 'web-dev' || work === 'design') {
			setTopic(work);
		} else {
			setTopic('web-dev');
		}
	}, [router.query]);

	return (
		<>
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

			<form
				className="form form-large accent--blue"
				onSubmit={handleSubmitForm}
				// @ts-ignore
				style={{ '--padding-left': 'var(--padding-extra-large)' }}
			>
				<div className="form-group">
					<label htmlFor="fullName" className="form-label">
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						className="form-control"
						required
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						id="email"
						className="form-control"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="topic" className="form-label">
						Topic
					</label>
					<select
						name="topic"
						id="topic"
						className="form-control"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
					>
						<option value="web-dev">Website Development</option>
						<option value="design">UI/UX Design</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="subject" className="form-label">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						className="form-control"
						required
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message" className="form-label">
						More about Our Project
					</label>
					<textarea
						id="message"
						className="form-text no-resize form-control"
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<input
					type="submit"
					className="form-full-submit"
					disabled={!canSubmit}
					value="Ready to Grow Online!"
				/>
			</form>
		</>
	);
};

export default ContactForm;
