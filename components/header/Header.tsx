import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout } from '../layout/GridLayout';
import styles from '../../styles/Header.module.scss';
import HeaderText from './HeaderText';
import HeaderImage from './HeaderImage';
import { SectionCopyWithImage } from '../../types/CopyTypes';

const Header = () => {
	const headerSection: MutableRefObject<SectionCopyWithImage> = useRef({
		title: 'Turning your ideas into reality.',
		body: 'Hi, I am Syed Basim! I help you enhance and grow your online presence. I build fast, functional and beautiful websites to help you with that.',
		image: {
			url: '/assets/header-mockup.svg',
			alt: 'header image mockup',
			properties: {
				width: 1612,
				height: 836
			}
		},
		cta: [
			{
				text: 'What I do',
				type: 'button',
				link: {
					type: 'internal',
					url: '/#services'
				}
			},
			{
				text: 'Contact',
				type: 'link',
				link: {
					type: 'internal',
					url: '/contact'
				}
			}
		]
	});

	return (
		<header className={`${styles['header']} theme--default accent--blue`}>
			<SectionContainer>
				<SectionLayout>
					<ColumnLayout cols="2,2">
						<HeaderText
							text={{
								title: headerSection.current.title,
								body: headerSection.current.body,
								cta: headerSection.current.cta
							}}
						/>
						<HeaderImage image={headerSection.current.image} />
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</header>
	);
};

export default Header;
