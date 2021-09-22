import { MutableRefObject } from 'react';
import CtaItem from './CtaItem';

interface CtaItemProperties {
	icon: string;
	title: string;
	body: string;
}

const CtaItemContainer: React.FC<{
	items: MutableRefObject<CtaItemProperties[]>;
}> = ({ items }) => {
	return (
		<>
			{items.current.map((item, index) => (
				<CtaItem item={item} key={index} />
			))}
		</>
	);
};

export default CtaItemContainer;
