import Link from 'next/link';
import { ButtonType } from '../../types/ButtonTypes';

const ButtonItem: React.FC<Omit<ButtonType, 'link'>> = ({ text, type, fn }) => {
	return (
		<button className={`copy__cta variant--${type}`} onClick={fn}>
			{text}
			<svg className="copy__cta-icon">
				<use href="/assets/sprite.svg#chevron-right"></use>
			</svg>
		</button>
	);
};

const Button: React.FC<ButtonType> = ({ type = 'button', text, fn, link }) => {
	if (!link) return <ButtonItem {...{ type, text, fn }} />;

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
			<a href={link.url} rel="noopener noreferrer" target="_blank">
				<ButtonItem {...{ type, text, fn }} />
			</a>
		);
};

export default Button;
