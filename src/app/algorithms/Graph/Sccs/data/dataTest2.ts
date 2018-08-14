import { convertToArray } from '../utils';

const raw =
`1 7
2 1
3 8
4 6
5 3
6 2
7 5
8 4`;

export const data = convertToArray(raw);

// result 8,0,0,0,0