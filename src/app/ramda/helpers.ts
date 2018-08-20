import * as R from 'ramda';

// this code is very not efficiency, only debug
// cause objToString is recursive function
// and after each call function pipe is created
// doesnt work with cyclic links aka child -> parent -> child
// export function objToString(obj: object): string {
//   return R.pipe(
//     R.toPairs,
//     R.map(
//       R.ifElse(
//         item => typeof item[1] === 'object',
//         (item: any[]) => `${item[0]}:  ${objToString(item[1])}`,
//         // (item: any[]) => `${item[0]}:  ${item[1]}`,
//         R.join(': ')
//       )
//     ),
//     R.join(', '),
//     R.concat('{ '),
//     R.partialRight(R.concat, [' }'])
//   )(obj) as any;
// }

export function objToString(value: any): any {
  if (
    typeof value === 'number' ||
    typeof value === 'string' ||
    typeof value === 'undefined' ||
    typeof value === 'boolean'
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return R.pipe<any[], any[], string, string, string>(
      R.map((item) => objToString(item)) as any,
      R.join(', '),
      R.concat('['),
      R.partialRight(R.concat as any, [']'])
    )(value);

    // return '[' + value.map(
    //   item => objToString(item)
    // ).join(', ') + ']';
  }

  return R.pipe(
    R.toPairs,
    R.map(
      R.ifElse(
        item => typeof item[1] === 'object',
        (item: any[]) => `${item[0]}: ${objToString(item[1])}`,
        R.join(': ')
      )
    ),
    R.join(', '),
    R.concat(Array.isArray(value) ? '[ ' : '{ '),
    R.partialRight(R.concat, [Array.isArray(value) ? ' ]' : ' }'])
  )(value) as any;
}


export const isNotNil = R.complement(R.isNil);