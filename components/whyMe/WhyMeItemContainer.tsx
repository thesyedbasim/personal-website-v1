import { CopyDetailsType } from '../../types/CopyTypes';
import { ColumnLayout } from '../layout/GridLayout';
import WhyMeItem from './WhyMeItem';

const WhyMeItemContainer: React.FC<{
	items: CopyDetailsType[];
}> = ({ items }) => {
	return (
		<ColumnLayout cols="1,1,1,1">
			{items.map((whymeItem, index) => (
				<WhyMeItem {...whymeItem} key={index} />
			))}
		</ColumnLayout>
	);
};

export default WhyMeItemContainer;
