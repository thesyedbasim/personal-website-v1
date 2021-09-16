import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyIcon
} from '../base/copy/Copy';

const CtaItem = ({ item }) => {
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
