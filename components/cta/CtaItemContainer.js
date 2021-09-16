import CtaItem from './CtaItem';

const CtaItemContainer = ({ items }) => {
	return (
		<>
			{items.current.map((item, index) => (
				<CtaItem item={item} key={index} />
			))}
		</>
	);
};

export default CtaItemContainer;
