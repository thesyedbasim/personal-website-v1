import TechStackItem from './TechStackItem';

const TechStackItemsContainer: React.FC<{ images: { image: string }[] }> = ({
	images
}) => {
	return (
		<div
			className="grid-layout"
			data-grid="3,2"
			style={{ justifyItems: 'center' }}
		>
			{images.map((techStackItem, index) => (
				<TechStackItem image={techStackItem.image} key={index} />
			))}
		</div>
	);
};

export default TechStackItemsContainer;
