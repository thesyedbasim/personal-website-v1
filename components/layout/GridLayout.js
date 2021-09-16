export const RowLayout = ({ children }) => {
	return <div className="row-layout">{children}</div>;
};

export const ColumnLayout = ({ children, cols }) => {
	return (
		<div className="column-layout" data-columns={cols}>
			{children}
		</div>
	);
};
