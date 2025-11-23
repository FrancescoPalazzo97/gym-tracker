export const UNIT_NAMES = ['kg', 'lbs', ''] as const;
export type UnitName = typeof UNIT_NAMES[number];

export const SET_TYPES = ['W', 'N', 'D', 'F'] as const;
export type SetType = typeof SET_TYPES[number];
