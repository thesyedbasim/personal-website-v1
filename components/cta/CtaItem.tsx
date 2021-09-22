import { Copy, CopyHeader, CopyTitle, CopyBody, CopyIcon } from '../base/Copy';

interface CtaItem {
	icon: string;
	title: string;
	body: string;
}

const CtaItem: React.FC<{ item: CtaItem }> = ({ item }) => {
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
