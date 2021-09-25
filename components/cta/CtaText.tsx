import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/Copy';
import Button from '../base/Button';
import { SectionCopyHeader } from '../../types/CopyTypes';

const CtaText: React.FC<{ text: SectionCopyHeader }> = ({ text }) => {
	return (
		<Copy variant="footer" style={{ paddingRight: '8rem' }}>
			<CopyHeader>
				<CopyTitle text={text.title} />
			</CopyHeader>
			<CopyBody text={text.body} />
			<CopyFooter>
				<Button
					text="Contact"
					type="button"
					link={{ type: 'internal', url: '/contact' }}
				/>
			</CopyFooter>
		</Copy>
	);
};

export default CtaText;
