import Button from '../base/Button';

const NewsletterForm = () => {
	return (
		<div
			className="row-layout"
			style={{ alignContent: 'center', justifyContent: 'center' }}
		>
			<form
				action="https://www.getrevue.co/profile/syedbasim/add_subscriber"
				method="POST"
				target="_blank"
				className="form newsletter-form"
				name="revue-form"
			>
				<div className="form-group">
					<label htmlFor="name" className="form-label">
						Name:
					</label>
					<input
						type="text"
						id="name"
						className="form-control"
						name="member[first_name]"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email" className="form-label">
						Email:
					</label>
					<input
						type="text"
						id="email"
						className="form-control"
						name="member[email]"
					/>
				</div>
				<div className="copy variant--detail">
					<footer className="copy__footer" style={{ paddingLeft: 0 }}>
						<Button
							text="Sign up"
							className="copy__cta variant--button"
							name="member[subscribe]"
						/>
					</footer>
				</div>
				<footer className="form-footer">
					<div className="form-description">
						<p>
							By subscribing, you agree with Revue’s&nbsp;
							<a
								target="_blank"
								rel="noreferrer noopener"
								href="https://www.getrevue.co/terms"
								className="form-description-link"
							>
								Terms of Service
							</a>
							&nbsp;and&nbsp;
							<a
								target="_blank"
								rel="noreferrer noopener"
								href="https://www.getrevue.co/privacy"
								className="form-description-link"
							>
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</footer>
			</form>
		</div>
	);
};

export default NewsletterForm;
