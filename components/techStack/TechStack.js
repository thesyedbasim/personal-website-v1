import { useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { Copy, CopyHeader, CopyCaption, CopyTitle } from '../base/copy/Copy';
import TechStackItem from './TechStackItem';

const TechStack = () => {
	const techStackSection = useRef({
		caption: 'My Tech stack',
		title: 'Professional stack for your professional needs'
	});

	const techStackItems = useRef([
		{
			image: 'html'
		},
		{
			image: 'css'
		},
		{
			image: 'js'
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
	]);

	return (
		<section className="theme--white accent--blue">
			<SectionContainer>
				<SectionLayout>
					<div
						className="row-layout"
						style={{ '--row-layout-gap': 'var(--row-layout-gap-extra-large)' }}
					>
						<div className="column-layout" data-columns="3,1">
							<Copy variant="section">
								<CopyHeader>
									<CopyCaption text={techStackSection.current.caption} />
									<CopyTitle text={techStackSection.current.title} />
								</CopyHeader>
							</Copy>
						</div>
						<div
							className="grid-layout"
							data-grid="3,2"
							style={{ justifyItems: 'center' }}
						>
							{techStackItems.current.map((techStackItem, index) => (
								<TechStackItem image={techStackItem.image} key={index} />
							))}
						</div>
					</div>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default TechStack;
