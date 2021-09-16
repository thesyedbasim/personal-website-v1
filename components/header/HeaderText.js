import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/copy/Copy';
import Button from '../base/Button';

const HeaderText = ({ text }) => {
	return (
		<div
			className="row-layout"
			style={{
				'--row-gap': 'var(--row-layout-gap-medium)',
				alignContent: 'center'
			}}
		>
			<Copy variant="superhero">
				<CopyHeader>
					<CopyTitle text={text.current.title} />
				</CopyHeader>
				<CopyBody text={text.current.body} />
				<CopyFooter>
					{text.current.cta.map((cta, index) => (
						<Button {...cta} key={index} />
					))}
				</CopyFooter>
			</Copy>
		</div>
	);
};

export default HeaderText;
