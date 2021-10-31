import { Copy, CopyBody, CopyHeader, CopyTitle } from '../base/Copy';
import { CopyItemsType } from '../../types/CopyTypes';

const OpenSourceCard: React.FC<CopyItemsType> = ({ title, body, link }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<div className="link-item">
				<Copy variant="linkItem">
					<CopyHeader>
						<CopyTitle text={title} />
					</CopyHeader>
					<CopyBody text={body} />
				</Copy>
			</div>
		</a>
	);
};

export default OpenSourceCard;
