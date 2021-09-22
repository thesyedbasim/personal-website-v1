import { MutableRefObject } from 'react';
import { Copy, CopyCaption, CopyHeader, CopyTitle } from '../base/Copy';
import { ColumnLayout } from '../layout/GridLayout';

interface WhyMeTextProperties {
	caption: string;
	title: string;
}

const WhyMeText: React.FC<{ text: MutableRefObject<WhyMeTextProperties> }> = ({
	text
}) => {
	return (
		<ColumnLayout cols="3,1">
			<Copy variant="section">
				<CopyHeader>
					<CopyCaption text={text.current.caption} />
					<CopyTitle text={text.current.title} />
				</CopyHeader>
			</Copy>
		</ColumnLayout>
	);
};

export default WhyMeText;
