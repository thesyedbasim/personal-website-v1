import Image from 'next/image';
import styles from '../../styles/Header.module.scss';

const HeaderImage = ({ image }) => {
	return (
		<figure className={styles['header-image']}>
			<Image
				src={`/assets/${image}.svg`}
				width={1612}
				height={836}
				alt="header image mockup"
				className={styles['header-image-tag']}
			/>
		</figure>
	);
};

export default HeaderImage;
