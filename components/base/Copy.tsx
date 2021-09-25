import Link from 'next/link';
import React from 'react';
import { LinkType } from '../../types/LinkTypes';

type CopyVariants =
	| 'superhero'
	| 'super-section'
	| 'section'
	| 'sideBySide'
	| 'items'
	| 'detail'
	| 'footer';

export const Copy: React.FC<{
	variant: CopyVariants;
	style?: object;
}> = ({ children, variant, style }) => {
	return (
		<div className={`copy variant--${variant}`} style={style}>
			{children}
		</div>
	);
};

export const CopyHeader: React.FC = ({ children }) => {
	return <header className="copy__header">{children}</header>;
};

export const CopyCaption: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className="copy__caption">
			<h2>{text}</h2>
		</div>
	);
};

export const CopyImage: React.FC<{ image: string }> = ({ image }) => {
	return (
		<svg className="copy__image">
			<use href={`/assets/sprite.svg#${image}`}></use>
		</svg>
	);
};

export const CopyIcon: React.FC<{ icon: string }> = ({ icon }) => {
	return (
		<svg className="copy__icon">
			<use href={`/assets/sprite.svg#${icon}`}></use>
		</svg>
	);
};

export const CopyTitle: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className="copy__title">
			<h1>{text}</h1>
		</div>
	);
};

export const CopyBody: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className="copy__body">
			<p>{text}</p>
		</div>
	);
};

export const CopyFooter: React.FC = ({ children }) => {
	return <footer className="copy__footer">{children}</footer>;
};

export const CopyTextItem: React.FC<{
	link?: LinkType;
	text: string;
}> = ({ link, text }) => {
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
};
