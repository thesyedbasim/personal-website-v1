import { useRef } from 'react';
import {
	Copy,
	CopyBody,
	CopyCaption,
	CopyHeader,
	CopyTitle
} from '../components/base/copy/Copy';
import { ColumnLayout, RowLayout } from '../components/layout/GridLayout';
import { SectionContainer, SectionLayout } from '../components/layout/Section';

const WebDevelopment = () => {
	const webdevSection = useRef({
		caption: 'Website Development',
		title: 'Enhance your online presence',
		body: 'Having a great website is really important for online presence. Whether you are a blogger, a content creator, or started a company, a stunning customer drags your customers attention.'
	});

	return (
		<section className="accent--blue">
			<SectionContainer>
				<SectionLayout>
					<RowLayout>
						<Copy variant="super-section">
							<ColumnLayout cols="3,1">
								<CopyHeader>
									<CopyCaption text={webdevSection.current.caption} />
									<CopyTitle text={webdevSection.current.title} />
								</CopyHeader>
							</ColumnLayout>
							<ColumnLayout cols="3,1">
								<CopyBody text={webdevSection.current.body} />
							</ColumnLayout>
						</Copy>
					</RowLayout>
				</SectionLayout>
			</SectionContainer>
		</section>
	);
};

export default WebDevelopment;
