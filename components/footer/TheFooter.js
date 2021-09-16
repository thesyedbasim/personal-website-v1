import { SectionContainer, SectionLayout } from '../layout/Section';
import styles from '../../styles/TheFooter.module.scss';

const TheFooter = () => {
	return (
		<footer className={`${styles['footer']} theme--grey`}>
			<SectionContainer>
				<div className="copy variant--footer">
					<div className="copy__body">
						<p>
							Copyright &copy; {new Date().getFullYear()} Syed Basim. All Rights
							Reserved.
						</p>
					</div>
				</div>
			</SectionContainer>
		</footer>
	);
};

export default TheFooter;
