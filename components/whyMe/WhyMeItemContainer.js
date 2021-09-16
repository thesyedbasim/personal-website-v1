import WhyMeItem from './WhyMeItem';

const WhyMeItemContainer = ({ items }) => {
	return (
		<div className="column-layout" data-columns="1,1,1,1">
			{items.current.map((whymeItem, index) => (
				<WhyMeItem {...whymeItem} key={index} />
			))}
		</div>
	);
};

export default WhyMeItemContainer;
