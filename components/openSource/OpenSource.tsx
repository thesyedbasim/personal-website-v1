import { MutableRefObject, useRef } from 'react';
import { SectionContainer, SectionLayout } from '../layout/Section';
import { ColumnLayout, RowLayout } from '../layout/GridLayout';
import { SectionCopyWithItems } from '../../types/CopyTypes';
import { Copy, CopyCaption, CopyTitle } from '../base/Copy';
import OpenSourceCard from './OpenSourceCard';

const OpenSource = () => {
	const openSourceContributions: MutableRefObject<SectionCopyWithItems> =
		useRef({
			caption: 'My Open Source Contributions',
			title: 'Creating Open Source, Accessible and Helpful Apps',
			items: [
				{
					title: 'JSON to ENV',
					body: 'A light npm executable package to convert JSON files to Environment Variable format.',
					link: 'https://www.npmjs.com/package/json-to-env-var'
				}
			]
		});

	return (
		<section
			className="my-services theme--default accent--blue"
			id="open-source"
		>
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<ColumnLayout cols="3,1">
							<Copy variant="section">
								<CopyCaption text={openSourceContributions.current.caption} />
								<CopyTitle text={openSourceContributions.current.title} />
							</Copy>
						</ColumnLayout>
						<ColumnLayout cols="1,1">
							{openSourceContributions.current.items.map((item, index) => (
								<OpenSourceCard key={index} {...item} />
							))}
						</ColumnLayout>
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default OpenSource;
