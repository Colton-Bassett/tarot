export const READING_TYPES = ['general', 'romance', 'finance', 'career'] as const;
export const CARD_BACK_TYPES = ['plus', 'hearts', 'stars'] as const;
export const ORIENTATION_TYPES = ['both', 'upright', 'reversed'] as const;

export type ReadingType = (typeof READING_TYPES)[number];
export type CardBackType = (typeof CARD_BACK_TYPES)[number];
export type OrientationType = (typeof ORIENTATION_TYPES)[number];
