import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';

import useDisplayToast from '../../hooks/useDisplayToast';

import { pushData } from '../../lib/firebase';
import * as emailValidator from 'email-validator';

const ContactForm = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [topic, setTopic] = useState('web-dev');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [canSubmit, setCanSubmit] = useState(false);
	const { err, sentStatus } = useDisplayToast();

	const handleSubmitForm = async (e: FormEvent) => {
		e.preventDefault();

		setCanSubmit(false);

		const { error: firebaseError } = await pushData('work-contact', {
			fullName,
			email,
			topic,
			subject,
			message
		});

		if (!firebaseError) {
			setFullName('');
			setEmail('');
			setSubject('');
			setMessage('');

			err.setError(false);

			return sentStatus.setSent(true);
		}

		if (firebaseError)
			err.setError(
				'There was some error sending the request. Please try again later.'
			);
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
		}
	}, [router.query]);

	return (
		<>
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
					value="Submit"
				/>
			</form>
		</>
	);
};

export default ContactForm;
