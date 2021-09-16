import Link from 'next/link';

const Button = ({ type = 'button', text, fn, link }) => {
	if (link) {
		if (link.type === 'internal')
			return <ButtonLink {...{ type, text, fn, link }} />;

		if (link.type === 'external')
			return <ButtonLinkExternal {...{ type, text, fn, link }} />;
	}

	return (
		<button className={`copy__cta variant--${type}`} onClick={fn}>
			{text}
			<svg className="copy__cta-icon">
				<use href="./assets/sprite.svg#chevron-right"></use>
			</svg>
		</button>
	);
};

function ButtonLink({ type, link, fn, text }) {
	return (
		<Link href={link.url}>
			<a>
				<button className={`copy__cta variant--${type}`} onClick={fn}>
					{text}
					<svg className="copy__cta-icon">
						<use href="/assets/sprite.svg#chevron-right"></use>
					</svg>
				</button>
			</a>
		</Link>
	);
}

function ButtonLinkExternal({ type, link, fn, text }) {
	return (
		<a href={link.url}>
			<button className={`copy__cta variant--${type}`} onClick={fn}>
				{text}
				<svg className="copy__cta-icon">
					<use href="./assets/sprite.svg#chevron-right"></use>
				</svg>
			</button>
		</a>
	);
}

export default Button;
