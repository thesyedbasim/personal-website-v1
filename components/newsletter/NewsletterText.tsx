import { SectionCopyHeader } from '../../types/CopyTypes';
import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyCaption
} from '../base/Copy';
import { RowLayout } from '../layout/GridLayout';

const NewsletterText: React.FC<{
	newsletterText: SectionCopyHeader;
}> = ({ newsletterText }) => {
	return (
		<RowLayout>
			<Copy variant="sideBySide">
				<CopyHeader>
					<CopyCaption text={newsletterText.caption} />
					<CopyTitle text={newsletterText.title} />
				</CopyHeader>
				<CopyBody text={newsletterText.body} />
			</Copy>
		</RowLayout>
	);
};

export default NewsletterText;
