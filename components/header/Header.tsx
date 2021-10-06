import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout } from '../layout/GridLayout';
import styles from '../../styles/Header.module.scss';
import HeaderText from './HeaderText';
import HeaderImage from './HeaderImage';
import { SectionCopyWithImage } from '../../types/CopyTypes';

const Header = () => {
	const headerSection: MutableRefObject<SectionCopyWithImage> = useRef({
		title: 'Websites that Help you Grow Online.',
		body: 'Hi, I am Syed Basim, a freelance Web Developer and Designer! I Enhance and Grow your Online Presence and Conversion Rates. I build Fast, Functional and Beautiful Websites to help you with that.',
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
