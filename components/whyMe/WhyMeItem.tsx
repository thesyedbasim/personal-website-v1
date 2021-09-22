import { Copy, CopyHeader, CopyIcon, CopyTitle, CopyBody } from '../base/Copy';

interface WhyMeItemProperties {
	icon: string;
	title: string;
	body: string;
}

const WhyMeItem: React.FC<WhyMeItemProperties> = ({ icon, title, body }) => {
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
