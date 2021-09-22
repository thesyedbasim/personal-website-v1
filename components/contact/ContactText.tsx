import {
	Copy,
	CopyBody,
	CopyHeader,
	CopyTextItem,
	CopyTitle
} from '../../components/base/Copy';

import { RowLayout } from '../layout/GridLayout';

interface ContactTextProps {
	title: string;
	body: string;
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
				{contact.map((contactItem, index) => (
					<CopyTextItem {...contactItem} key={index} />
				))}
			</Copy>
		</RowLayout>
	);
};

export default ContactText;
