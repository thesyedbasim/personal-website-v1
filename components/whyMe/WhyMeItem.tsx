import { CopyDetailsType } from '../../types/CopyTypes';
import { Copy, CopyHeader, CopyIcon, CopyTitle, CopyBody } from '../base/Copy';

const WhyMeItem: React.FC<CopyDetailsType> = ({ icon, title, body }) => {
	return (
		<article className="why-me-item">
			<Copy variant="detail">
				<CopyHeader>
					<CopyIcon icon={icon} />
					<CopyTitle text={title} />
				</CopyHeader>
				<CopyBody text={body} />
			</Copy>
		</article>
	);
};

export default WhyMeItem;
