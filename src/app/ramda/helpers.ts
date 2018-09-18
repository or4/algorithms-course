import * as R from 'ramda';

export const isNotNil = R.complement(R.isNil);

export function notEquals(arg1: any, arg2: any): boolean {
  return R.complement(R.equals)(arg1, arg2);
}

let currentMaxDeep: number;

const convertArray = R.pipe<any[], string[], string, string, string>(
  R.map((item) => toString(item)),
  R.join(', '),
  R.concat('['),
  R.partialRight(R.concat as any, [']'])
);

const convertObject = R.pipe(
  R.toPairs,
  R.map(
    R.ifElse(
      item => typeof item[1] === 'object', // value object recursive call function
      (item: any[]) => `${item[0]}: ${toString(item[1])}`,
      R.join(': ')
    )
  ),
  R.join(', '),
  R.concat('{ '),
  R.partialRight(R.concat, [' }'])
);

// not working if exists cycles
function toString(value: any): string {
  if (R.equals(currentMaxDeep, 0)) {
    return String(value);
  }
  currentMaxDeep--;

  if (R.equals(typeof value, 'function')) {
    return String(value);
  }
  if (notEquals(typeof value, 'object')) {
    return value;
  }

  if (Array.isArray(value)) {
    return convertArray(value);
  }

  return convertObject(value) as any;
}

export function objToString(value: any, maxDeep: number = 5): string {
  currentMaxDeep = maxDeep; // this dirty hack need to save perfomance and prevent stack overflow when cycles
  try {
    return toString(value);
  }
  catch (err) {
    return `Error when converting to string: ${err}, ${String(value)}`;
  }
}

