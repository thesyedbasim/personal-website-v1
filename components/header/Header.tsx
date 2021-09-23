import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout } from '../layout/GridLayout';
import styles from '../../styles/Header.module.scss';
import HeaderText from './HeaderText';
import HeaderImage from './HeaderImage';

interface HeaderSectionProperites {
	title: string;
	body: string;
	picture: string;
	cta: {
		text: string;
		type: 'button' | 'link';
		link: {
			type: 'internal' | 'external';
			url: string;
		};
	}[];
}

const Header = () => {
	const headerSection: MutableRefObject<HeaderSectionProperites> = useRef({
		title: 'Turning your ideas into reality.',
		body: 'Hi, I am Syed Basim! I help you enhance and grow your online presence. I build fast, functional and beautiful websites to help you with that.',
		picture: 'header-mockup',
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
						<HeaderText text={headerSection} />
						<HeaderImage image={headerSection.current.picture} />
					</ColumnLayout>
				</SectionLayout>
			</SectionContainer>
		</header>
	);
};

export default Header;
