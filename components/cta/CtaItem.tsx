import { CopyDetailsType } from '../../types/CopyTypes';
import { Copy, CopyHeader, CopyTitle, CopyBody, CopyIcon } from '../base/Copy';

const CtaItem: React.FC<{ item: CopyDetailsType }> = ({ item }) => {
	return (
		<article>
			<Copy variant="detail">
				<CopyHeader>
					<CopyIcon icon={item.icon} />
					<CopyTitle text={item.title} />
				</CopyHeader>
				<CopyBody text={item.body} />
			</Copy>
		</article>
	);
};

export default CtaItem;
