import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/Copy';
import Button from '../base/Button';
import { MutableRefObject } from 'react';

interface HeaderTextProperties {
	title: string;
	body: string;
	cta: {
		text: string;
		type: 'button' | 'link';
		link: {
			type: 'internal' | 'external';
			url: string;
		};
	}[];
}

const HeaderText: React.FC<{ text: MutableRefObject<HeaderTextProperties> }> =
	({ text }) => {
		return (
			<div
				className="row-layout"
				style={{
					// @ts-ignore
					'--row-gap': 'var(--row-layout-gap-medium)',
					alignContent: 'center'
				}}
			>
				<Copy variant="superhero">
					<CopyHeader>
						<CopyTitle text={text.current.title} />
					</CopyHeader>
					<CopyBody text={text.current.body} />
					<CopyFooter>
						{text.current.cta.map((cta, index) => (
							<Button {...cta} key={index} />
						))}
					</CopyFooter>
				</Copy>
			</div>
		);
	};

export default HeaderText;
