import { CopyDetailsType } from '../../types/CopyTypes';
import CtaItem from './CtaItem';

const CtaItemContainer: React.FC<{
	items: CopyDetailsType[];
}> = ({ items }) => {
	return (
		<>
			{items.map((item, index) => (
				<CtaItem item={item} key={index} />
			))}
		</>
	);
};

export default CtaItemContainer;
