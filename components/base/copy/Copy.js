import Link from 'next/link';

export const Copy = ({ children, variant, style }) => {
	return (
		<div className={`copy variant--${variant}`} style={style}>
			{children}
		</div>
	);
};

export function CopyHeader({ children }) {
	return <header className="copy__header">{children}</header>;
}

export function CopyCaption({ text }) {
	return (
		<div className="copy__caption">
			<h2>{text}</h2>
		</div>
	);
}

export function CopyImage({ image }) {
	return (
		<svg className="copy__image">
			<use href={`/assets/sprite.svg#${image}`}></use>
		</svg>
	);
}

export function CopyIcon({ icon }) {
	return (
		<svg className="copy__icon">
			<use href={`/assets/sprite.svg#${icon}`}></use>
		</svg>
	);
}

export function CopyTitle({ text }) {
	return (
		<div className="copy__title">
			<h1>{text}</h1>
		</div>
	);
}

export function CopyBody({ text }) {
	return (
		<div className="copy__body">
			<p>{text}</p>
		</div>
	);
}

export function CopyFooter({ children }) {
	return <footer className="copy__footer">{children}</footer>;
}

export function CopyTextItem({ link, text }) {
	function TextItem({ children }) {
		return <div className="copy__text-item">{children}</div>;
	}

	if (!link) {
		return (
			<TextItem>
				<p>{text}</p>
			</TextItem>
		);
	}

	if (link.type === 'internal') {
		return (
			<TextItem>
				<Link href={link.url}>
					<a>{text}</a>
				</Link>
			</TextItem>
		);
	}
}
