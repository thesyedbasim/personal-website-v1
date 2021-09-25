import { LinkType } from './LinkTypes';

export type NavFn = () => void;

export type NavVariant = 'small' | 'big';

export interface NavLinkType {
	text: string;
	link: LinkType;
	closeNav?: NavFn;
}
