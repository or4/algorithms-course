import { convertToArray } from '../utils';

const raw =
`1 2
2 3
3 4
4 1`;

export const data = convertToArray(raw);

// result 2,0,0,0,0