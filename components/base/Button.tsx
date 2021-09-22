import Link from 'next/link';
import { MouseEvent } from 'react';

interface LinkType {
	type: 'internal' | 'external';
	url: string;
}

interface ButtonProps {
	type?: 'button' | 'link';
	text: string;
	fn?: (e: MouseEvent<HTMLButtonElement>) => void;
	link?: LinkType;
}

const ButtonItem: React.FC<Omit<ButtonProps, 'link'>> = ({
	text,
	type,
	fn
}) => {
	return (
		<button className={`copy__cta variant--${type}`} onClick={fn}>
			{text}
			<svg className="copy__cta-icon">
				<use href="/assets/sprite.svg#chevron-right"></use>
			</svg>
		</button>
	);
};

const Button: React.FC<ButtonProps> = ({ type = 'button', text, fn, link }) => {
	if (link) {
		if (link.type === 'internal')
			return (
				<Link href={link.url}>
					<a>
						<ButtonItem {...{ type, text, fn }} />
					</a>
				</Link>
			);

		if (link.type === 'external')
			return (
				<a href={link.url} rel="noopener noreferrer">
					<ButtonItem {...{ type, text, fn }} />
				</a>
			);
	}

	return <ButtonItem {...{ type, text, fn }} />;
};

export default Button;
