import { ButtonType } from './ButtonTypes';

export interface SectionImageType {
	url?: string;
	alt: string;
	properties?: {
		width: number;
		height: number;
	};
}

export interface SectionCopyHeader {
	caption?: string;
	title: string;
	body?: string;
	cta?: ButtonType[];
}

export interface CopyDetailsType {
	icon: string;
	title: string;
	body: string;
}

export interface SectionCopyWithDetails extends SectionCopyHeader {
	items: CopyDetailsType[];
}

export interface SectionCopyWithImage extends SectionCopyHeader {
	image: SectionImageType;
}
