import { MouseEventHandler } from 'react';
import { LinkType } from './LinkTypes';

export interface ButtonType {
	type: 'button' | 'link';
	text: string;
	fn?: MouseEventHandler<HTMLButtonElement>;
	link?: LinkType;
}
