const SectionContainer: React.FC<{ variant?: 'nav' }> = ({
	children,
	variant
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

const SectionLayout: React.FC<{ variant?: 'nav' }> = ({
	children,
	variant
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
