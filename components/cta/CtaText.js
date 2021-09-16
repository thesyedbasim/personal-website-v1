import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/copy/Copy';
import Button from '../base/Button';

const CtaText = ({ text }) => {
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
