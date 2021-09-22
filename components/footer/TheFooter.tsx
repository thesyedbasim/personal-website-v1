import { SectionContainer } from '../layout/Section';
import styles from '../../styles/TheFooter.module.scss';
import { Copy, CopyBody } from '../base/Copy';

const TheFooter = () => {
	return (
		<footer className={`${styles['footer']} theme--grey`}>
			<SectionContainer>
				<Copy variant="footer">
					<CopyBody
						text={`Copyright \u00A9 ${new Date().getFullYear()} Syed Basim. All Rights
							Reserved.`}
					/>
				</Copy>
			</SectionContainer>
		</footer>
	);
};

export default TheFooter;
