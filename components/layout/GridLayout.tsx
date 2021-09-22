export const RowLayout: React.FC = ({ children }) => {
	return <div className="row-layout">{children}</div>;
};

type Columns = '1,1' | '2,2' | '2,1,1' | '3,1' | '3,2' | '1,1,1,1';

export const ColumnLayout: React.FC<{ cols: Columns }> = ({
	children,
	cols
}) => {
	return (
		<div className="column-layout" data-columns={cols}>
			{children}
		</div>
	);
};
