import { convertToArray } from '../utils';

const raw =
`1 3
2 7
3 2
4 1
5 8
7 5
8 4`;

export const data = convertToArray(raw);

// result 7,0,0,0,0