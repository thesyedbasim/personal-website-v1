import Image from 'next/image';
import styles from '../../styles/Header.module.scss';
import { SectionImageType } from '../../types/CopyTypes';

const HeaderImage: React.FC<{ image: SectionImageType }> = ({ image }) => {
	return (
		<figure className={styles['header-image']}>
			<Image
				src={image.url}
				width={image.properties.width}
				height={image.properties.height}
				alt={image.alt}
				className={styles['header-image-tag']}
			/>
		</figure>
	);
};

export default HeaderImage;
