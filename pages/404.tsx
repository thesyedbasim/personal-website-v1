import Button from '../components/base/Button';
import {
	Copy,
	CopyBody,
	CopyCaption,
	CopyFooter,
	CopyHeader,
	CopyTitle
} from '../components/base/Copy';
import { SectionContainer, SectionLayout } from '../components/layout/Section';
import styles from '../styles/404.module.scss';

import { NextSeo } from 'next-seo';

const page404 = () => {
	return (
		<>
			<NextSeo noindex={true} nofollow={true} />
			<div className={`${styles['container-404']} accent--blue`}>
				<SectionContainer>
					<SectionLayout>
						<div className="column-layout" data-columns="3,1">
							<div className="row-layout">
								<Copy variant="section">
									<CopyHeader>
										<CopyCaption text="404" />
										<CopyTitle text="This Page was not found!" />
									</CopyHeader>
									<CopyBody text="Looks like the page you are trying to visit was not found. Re-check the URL or navigate through the navigation bar." />
									<CopyFooter>
										<Button
											text="Home page"
											link={{ type: 'internal', url: '/' }}
										/>
										<Button
											text="Contact"
											type="link"
											link={{ type: 'internal', url: '/contact' }}
										/>
									</CopyFooter>
								</Copy>
							</div>
						</div>
					</SectionLayout>
				</SectionContainer>
			</div>
		</>
	);
};

export default page404;
