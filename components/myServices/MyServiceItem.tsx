import Image from 'next/image';
import Button from '../base/Button';
import { ColumnLayout, RowLayout } from '../layout/GridLayout';
import styles from '../../styles/Services.module.scss';
import {
	Copy,
	CopyHeader,
	CopyCaption,
	CopyTitle,
	CopyBody,
	CopyFooter
} from '../base/Copy';
import { SectionCopyWithImage } from '../../types/CopyTypes';

const MyServiceItemTextLeft: React.FC<SectionCopyWithImage> = ({
	caption,
	title,
	body,
	cta,
	image
}) => {
	return (
		<>
			<RowLayout>
				<Copy variant="sideBySide">
					<CopyHeader>
						<CopyCaption text={caption} />
						<CopyTitle text={title} />
					</CopyHeader>
					<CopyBody text={body} />
					<CopyFooter>
						{cta.map((ctaItem, index) => (
							<Button {...ctaItem} key={index} />
						))}
					</CopyFooter>
				</Copy>
			</RowLayout>
			<figure className={styles['side-picture']}>
				<Image
					src={image.url}
					width={image.properties.width}
					height={image.properties.height}
					alt={image.alt}
					className={styles['side-picture-tag']}
				/>
			</figure>
		</>
	);
};

const MyServiceItemTextRight: React.FC<SectionCopyWithImage> = ({
	caption,
	title,
	body,
	cta,
	image
}) => {
	return (
		<>
			<figure
				className={`${styles['side-picture']} ${styles['side-picture--right']}`}
			>
				<Image
					src={image.url}
					width={image.properties.width}
					height={image.properties.height}
					alt={image.alt}
					className={styles['side-picture-tag']}
				/>
			</figure>
			<RowLayout>
				<Copy variant="sideBySide">
					<CopyHeader>
						<CopyCaption text={caption} />
						<CopyTitle text={title} />
					</CopyHeader>
					<CopyBody text={body} />
					<CopyFooter>
						{cta.map((ctaItem, index) => (
							<Button {...ctaItem} key={index} />
						))}
					</CopyFooter>
				</Copy>
			</RowLayout>
		</>
	);
};

interface ServiceItemType extends SectionCopyWithImage {
	position: number;
}

const MyServiceItem: React.FC<ServiceItemType> = ({
	caption,
	title,
	body,
	cta,
	position,
	image
}) => {
	return (
		<ColumnLayout cols="1,1">
			{!(position % 2) ? (
				<MyServiceItemTextLeft
					{...{
						caption,
						title,
						body,
						cta,
						image
					}}
				/>
			) : (
				<MyServiceItemTextRight
					{...{
						caption,
						title,
						body,
						cta,
						image
					}}
				/>
			)}
		</ColumnLayout>
	);
};

export default MyServiceItem;
