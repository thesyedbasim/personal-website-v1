import { SectionCopyHeader } from '../../types/CopyTypes';
import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyCaption,
	CopyFooter
} from '../base/Copy';
import Button from '../base/Button';
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
				<CopyFooter>
					<Button
						type="link"
						text="Previous newsletters"
						link={{
							url: 'https://www.getrevue.co/profile/syedbasim',
							type: 'external'
						}}
					/>
				</CopyFooter>
			</Copy>
		</RowLayout>
	);
};

export default NewsletterText;
