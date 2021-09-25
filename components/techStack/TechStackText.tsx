import { SectionCopyHeader } from '../../types/CopyTypes';
import { Copy, CopyHeader, CopyCaption, CopyTitle } from '../base/Copy';

const TechStackText: React.FC<{ text: SectionCopyHeader }> = ({ text }) => {
	return (
		<div className="column-layout" data-columns="3,1">
			<Copy variant="section">
				<CopyHeader>
					<CopyCaption text={text.caption} />
					<CopyTitle text={text.title} />
				</CopyHeader>
			</Copy>
		</div>
	);
};

export default TechStackText;
