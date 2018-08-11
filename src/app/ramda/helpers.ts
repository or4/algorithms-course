import * as R from 'ramda';

// this code is very not efficiency, only debug
// cause objToString is recursive function
// and after each call function pipe is created
export function objToString(obj: object): string {
  return R.pipe(
    R.toPairs,
    R.map(
      R.ifElse(
        item => typeof item[1] === 'object',
        // (item: any[]) => `${item[0]}:  ${objToString(item[1])}`,
        (item: any[]) => `${item[0]}:  ${item[1]}`,
        R.join(': ')
      )
    ),
    R.join(', '),
    R.concat('{ '),
    R.partialRight(R.concat, [' }'])
  )(obj) as any;
}

export const isNotNil = R.complement(R.isNil);