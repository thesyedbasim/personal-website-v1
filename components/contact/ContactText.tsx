import {
	Copy,
	CopyBody,
	CopyHeader,
	CopyTextItem,
	CopyTitle
} from '../../components/base/Copy';
import { SectionCopyHeader } from '../../types/CopyTypes';

import { RowLayout } from '../layout/GridLayout';

interface ContactTextProps extends SectionCopyHeader {
	contact: { text: string }[];
}

const ContactText: React.FC<ContactTextProps> = ({ title, body, contact }) => {
	return (
		<RowLayout>
			<Copy variant="footer">
				<CopyHeader>
					<CopyTitle text={title} />
				</CopyHeader>
				<CopyBody text={body} />
			</Copy>
		</RowLayout>
	);
};

export default ContactText;
