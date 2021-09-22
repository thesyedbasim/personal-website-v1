import { Copy, CopyHeader, CopyImage } from '../base/Copy';

const TechStackItem: React.FC<{ image: string }> = ({ image }) => {
	return (
		<article>
			<Copy variant="items">
				<CopyHeader>
					<CopyImage image={`tech-${image}`} />
				</CopyHeader>
			</Copy>
		</article>
	);
};

export default TechStackItem;
