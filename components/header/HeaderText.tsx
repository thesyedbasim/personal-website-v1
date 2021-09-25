import {
	Copy,
	CopyHeader,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/Copy';
import Button from '../base/Button';
import { SectionCopyHeader } from '../../types/CopyTypes';

const HeaderText: React.FC<{ text: SectionCopyHeader }> = ({ text }) => {
	return (
		<div
			className="row-layout"
			style={{
				// @ts-ignore
				'--row-gap': 'var(--row-layout-gap-medium)',
				alignContent: 'center'
			}}
		>
			<Copy variant="superhero">
				<CopyHeader>
					<CopyTitle text={text.title} />
				</CopyHeader>
				<CopyBody text={text.body} />
				<CopyFooter>
					{text.cta.map((cta, index) => (
						<Button {...cta} key={index} />
					))}
				</CopyFooter>
			</Copy>
		</div>
	);
};

export default HeaderText;
