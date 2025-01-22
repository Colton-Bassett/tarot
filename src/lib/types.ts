export interface Keywords {
	upright: string[];
	reversed: string[];
}

export interface Description {
	upright: string;
	reversed: string;
}

export interface Card {
	id: number;
	name: string;
	keywords: Keywords;
	description: Description;
	isUpright: boolean;
}
