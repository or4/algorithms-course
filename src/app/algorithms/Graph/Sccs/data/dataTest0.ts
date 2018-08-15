import { convertToArray } from '../utils';

const raw =
`1 2
2 3
3 4
4 7
4 5
5 6
6 7
7 1`;

export const data = convertToArray(raw);

// result 2,0,0,0,0