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

interface ServiceItemProperties {
	caption: string;
	title: string;
	body: string;
	cta: {
		text: string;
		type?: 'button' | 'link';
		link: {
			type: 'internal' | 'external';
			url: string;
		};
	}[];
	picture: string;
	imageProperties: {
		width: number;
		height: number;
	};
	position: number;
}

const MyServiceItemTextLeft: React.FC<Omit<ServiceItemProperties, 'position'>> =
	({ caption, title, body, cta, picture, imageProperties }) => {
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
						src={`/assets/${picture}.svg`}
						width={imageProperties.width}
						height={imageProperties.height}
						alt={picture}
						className={styles['side-picture-tag']}
					/>
				</figure>
			</>
		);
	};

const MyServiceItemTextRight: React.FC<
	Omit<ServiceItemProperties, 'position'>
> = ({ caption, title, body, cta, picture, imageProperties }) => {
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
						{cta.map((ctaItem, index) => (
							<Button {...ctaItem} key={index} />
						))}
					</CopyFooter>
				</Copy>
			</RowLayout>
		</>
	);
};

const MyServiceItem: React.FC<ServiceItemProperties> = ({
	caption,
	title,
	body,
	cta,
	position,
	picture,
	imageProperties
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
						picture,
						imageProperties
					}}
				/>
			)}
		</ColumnLayout>
	);
};

export default MyServiceItem;
