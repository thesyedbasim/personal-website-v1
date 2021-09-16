import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyCaption
} from '../base/copy/Copy';
import { RowLayout } from '../layout/GridLayout';

const NewsletterText = ({ newsletterText }) => {
	return (
		<RowLayout>
			<Copy variant="sideBySide">
				<CopyHeader>
					<CopyCaption text={newsletterText.current.caption} />
					<CopyTitle text={newsletterText.current.title} />
				</CopyHeader>
				<CopyBody text={newsletterText.current.body} />
			</Copy>
		</RowLayout>
	);
};

export default NewsletterText;
