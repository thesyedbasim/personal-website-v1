const SectionContainer: React.FC = ({
	children,
	variant
}: {
	children: JSX.Element;
	variant?: string;
}) => {
	return (
		<div
			className={
				variant === 'nav' ? 'section-container--nav' : 'section-container'
			}
		>
			{children}
		</div>
	);
};

const SectionLayout: React.FC = ({
	children,
	variant
}: {
	children: JSX.Element;
	variant?: string;
}) => {
	return (
		<div
			className={variant === 'nav' ? 'section-layout--nav' : 'section-layout'}
		>
			{children}
		</div>
	);
};

export { SectionContainer, SectionLayout };
