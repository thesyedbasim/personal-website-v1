import { MutableRefObject } from 'react';
import { ColumnLayout } from '../layout/GridLayout';
import WhyMeItem from './WhyMeItem';

interface WhyMeItemProperties {
	icon: string;
	title: string;
	body: string;
}

const WhyMeItemContainer: React.FC<{
	items: MutableRefObject<WhyMeItemProperties[]>;
}> = ({ items }) => {
	return (
		<ColumnLayout cols="1,1,1,1">
			{items.current.map((whymeItem, index) => (
				<WhyMeItem {...whymeItem} key={index} />
			))}
		</ColumnLayout>
	);
};

export default WhyMeItemContainer;
