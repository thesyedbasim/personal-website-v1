import { Copy, CopyCaption, CopyHeader, CopyTitle } from '../base/copy/Copy';
import { ColumnLayout } from '../layout/GridLayout';

const WhyMeText = ({ text }) => {
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
