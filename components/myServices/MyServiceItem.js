import { useRouter } from 'next/router';
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
} from '../base/copy/Copy';

const MyServiceItem = ({
	caption,
	title,
	body,
	cta,
	ctaLink,
	position,
	picture,
	imageProperties
}) => {
	const router = useRouter();

	const goToCtaLink = () => {
		router.push(ctaLink);
	};

	return (
		<ColumnLayout cols="1,1">
			{!(position % 2) ? (
				<MyServiceItemTextLeft
					{...{
						caption,
						title,
						body,
						cta,
						goToCtaLink,
						picture,
						imageProperties
					}}
				/>
			) : (
				<MyServiceItemTextRight
					{...{
						caption,
						title,
						body,
						cta,
						goToCtaLink,
						picture,
						imageProperties
					}}
				/>
			)}
		</ColumnLayout>
	);
};

export default MyServiceItem;

function MyServiceItemTextLeft({
	caption,
	title,
	body,
	cta,
	goToCtaLink,
	picture,
	imageProperties
}) {
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
						<Button text={cta} fn={goToCtaLink} />
					</CopyFooter>
				</Copy>
			</RowLayout>
			<figure className={styles['side-picture']}>
				<Image
					src={`/assets/${picture}.svg`}
					width={imageProperties.width}
					height={imageProperties.height}
					alt={picture}
					className={styles['side-picture-tag']}
				/>
			</figure>
		</>
	);
}

function MyServiceItemTextRight({
	caption,
	title,
	body,
	cta,
	goToCtaLink,
	picture,
	imageProperties
}) {
	return (
		<>
			<figure
				className={`${styles['side-picture']} ${styles['side-picture--right']}`}
			>
				<Image
					src={`/assets/${picture}.svg`}
					alt={picture}
					width={imageProperties.width}
					height={imageProperties.height}
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
						<Button text={cta} fn={goToCtaLink} />
					</CopyFooter>
				</Copy>
			</RowLayout>
		</>
	);
}
