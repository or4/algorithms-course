import { convertToArray } from '../utils';

const raw =
`1 2
2 1
3 6
5 8
6 5
7 3
8 7`;

export const data = convertToArray(raw);

// result 5,2,0,0,0