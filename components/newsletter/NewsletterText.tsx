import { MutableRefObject } from 'react';
import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyCaption
} from '../base/Copy';
import { RowLayout } from '../layout/GridLayout';

interface NewsletterTextProperties {
	caption: string;
	title: string;
	body: string;
}

const NewsletterText: React.FC<{
	newsletterText: MutableRefObject<NewsletterTextProperties>;
}> = ({ newsletterText }) => {
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
