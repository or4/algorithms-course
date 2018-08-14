import { convertToArray } from '../utils';

const raw =
`1 2
2 8
3 1
4 7
5 6
6 5
7 4
8 3`;

export const data = convertToArray(raw);

// result 4,2,2,0,0