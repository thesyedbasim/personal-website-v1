import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import TechStackItem from './TechStackItem';
import { SectionCopyHeader } from '../../types/CopyTypes';
import TechStackText from './TechStackText';
import TechStackItemsContainer from './TechStackItemsContainer';

interface TechStackSection extends SectionCopyHeader {
	images: { image: string }[];
}

const TechStack: React.FC = () => {
	const techStackSection: MutableRefObject<TechStackSection> = useRef({
		caption: 'My Tech Stack',
		title: 'Professional Stack for your Professional Needs',
		images: [
			{
				image: 'html'
			},
			{
				image: 'sass'
			},
			{
				image: 'ts'
			},
			{
				image: 'react'
			},
			{
				image: 'node'
			},
			{
				image: 'mongo'
			}
		]
	});

	return (
		<section className="theme--default accent--blue">
			<SectionContainer>
				<SectionLayout>
					<div
						className="row-layout"
						// @ts-ignore
						style={{ '--row-layout-gap': 'var(--row-layout-gap-extra-large)' }}
					>
						<TechStackText
							text={{
								caption: techStackSection.current.caption,
								title: techStackSection.current.title
							}}
						/>
						<TechStackItemsContainer images={techStackSection.current.images} />
					</div>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default TechStack;
