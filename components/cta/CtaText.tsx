import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/Copy';
import Button from '../base/Button';
import React from 'react';

interface CtaTextProperties {
	title: string;
	body: string;
}

const CtaText: React.FC<{ text: React.MutableRefObject<CtaTextProperties> }> =
	({ text }) => {
		return (
			<Copy variant="footer" style={{ paddingRight: '8rem' }}>
				<CopyHeader>
					<CopyTitle text={text.current.title} />
				</CopyHeader>
				<CopyBody text={text.current.body} />
				<CopyFooter>
					<Button text="Contact" link={{ type: 'internal', url: '/contact' }} />
				</CopyFooter>
			</Copy>
		);
	};

export default CtaText;
