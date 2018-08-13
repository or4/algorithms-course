import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const testIfElse = () => {
  const incCount = R.ifElse(
    R.has('count'),
    R.over(R.lensProp('count'), R.inc),
    R.assoc('count', 1)
  );

  const incCount2 = R.ifElse(
    () => true,
    R.over(R.lensProp('count'), R.inc),
    R.assoc('count', 1)
  );

  const incCount3 = R.ifElse(
    R.equals({ count: 1 }),
    R.over(R.lensProp('count'), R.inc),
    R.assoc('count', 1)
  );

  console.log('incCount({})', incCount({}));
  console.log('incCount2({})', incCount2({}));
  console.log('incCount3({})', incCount3({}));
  console.log('incCount3({})', incCount3({ count: 1 }));
};

const testCond = () => {
  const fn = R.cond([
    [R.equals(0), R.always('water freezes at 0°C')],
    [R.equals(100), R.always('water boils at 100°C')],
    [R.T, temp => 'nothing special happens at ' + temp + '°C']
  ]);
  console.log(fn(0)); //=> 'water freezes at 0°C'
  console.log(fn(50)); //=> 'nothing special happens at 50°C'
  console.log(fn(100)); //=> 'water boils at 100°C'
};

const testUnless = () => {
  const safeInc1 = R.unless(R.isNil, R.inc);
  console.log(safeInc1(null)); //=> null
  console.log(safeInc1(1)); //=> 2

  console.log('testUnless2');
  // const safeInc = R.unless(R.equals(4), R.inc);
  const safeInc2 = R.unless((i: number) => (i % 2 !== 0), R.multiply(2));
  console.log('1', safeInc2(1)); // => 1
  console.log('2', safeInc2(2)); // => 4
  console.log('3', safeInc2(3)); // => 3
  console.log('4', safeInc2(4)); // => 8
  console.log('5', safeInc2(5)); // => 5
  console.log('6', safeInc2(6)); // => 12
  console.log('7', safeInc2(7)); // => 7
  console.log('8', safeInc2(8)); // => 16
  console.log('9', safeInc2(9)); // => 9

  console.log('testUnless3');
  const isNotNil = R.complement(R.isNil);
  const safeInc3 = R.unless(isNotNil, () => 'defaultValue');
  let c;
  console.log('1', safeInc3(1));
  console.log('2', safeInc3(c));
};

const testWhen = () => {
  // truncate :: String -> String
  const truncate = R.when(
    R.propSatisfies(R.gt((R as any).__, 10) as any, 'length'),
    R.pipe(R.take(10), R.append('…'), R.join(''))
  );
  console.log(truncate('12345' as any)); //=> '12345'
  console.log(truncate('0123456789ABC' as any)); //=> '0123456789…'
};

export class IfElse extends React.PureComponent<Props, State> {
  render() {
    testIfElse();
    testCond();
    testUnless();
    testWhen();

    return (
      <div>
        <h3>You can see code in project or see docs, result in console</h3>
        <h5><a href="https://ramdajs.com/docs/#ifElse">https://ramdajs.com/docs/#ifElse</a></h5>
        <h5><a href="https://ramdajs.com/docs/#cond">https://ramdajs.com/docs/#cond</a></h5>
        <h5><a href="https://ramdajs.com/docs/#unless">https://ramdajs.com/docs/#unless</a></h5>
        <h5><a href="https://ramdajs.com/docs/#when">https://ramdajs.com/docs/#when</a></h5>


        <h3>R.ifElse</h3>
        <div>

          <div>{`const testIfElse = () => {`}</div>
          <div>{`const incCount = R.ifElse(`}</div>
          <div>{`R.has('count'),`}</div>
          <div>{`R.over(R.lensProp('count'), R.inc),`}</div>
          <div>{`R.assoc('count', 1)`}</div>
          <div>{`);`}</div>
          <div>&nbsp;</div>
          <div>{`const incCount2 = R.ifElse(`}</div>
          <div>{`() => true,`}</div>
          <div>{`R.over(R.lensProp('count'), R.inc),`}</div>
          <div>{`R.assoc('count', 1)`}</div>
          <div>{`);`}</div>
          <div>&nbsp;</div>
          <div>{`const incCount3 = R.ifElse(`}</div>
          <div>{`R.equals({ count: 1 }),`}</div>
          <div>{`R.over(R.lensProp('count'), R.inc),`}</div>
          <div>{`R.assoc('count', 1)`}</div>
          <div>{`);`}</div>
          <div>&nbsp;</div>
          <div>{`console.log('incCount({})', incCount({}));`}</div>
          <div>{`console.log('incCount2({})', incCount2({}));`}</div>
          <div>{`console.log('incCount3({})', incCount3({}));`}</div>
          <div>{`console.log('incCount3({})', incCount3({ count: 1 }));`}</div>
          <div>{`};`}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <h3>R.cond</h3>

          <div>{`const testCond = () => {`}</div>
          <div>{`const fn = R.cond([`}</div>
          <div>{`[R.equals(0), R.always('water freezes at 0°C')],`}</div>
          <div>{`[R.equals(100), R.always('water boils at 100°C')],`}</div>
          <div>{`[R.T, temp => 'nothing special happens at ' + temp + '°C']`}</div>
          <div>{`]);`}</div>
          <div>{`console.log(fn(0)); //=> 'water freezes at 0°C'`}</div>
          <div>{`console.log(fn(50)); //=> 'nothing special happens at 50°C'`}</div>
          <div>{`console.log(fn(100)); //=> 'water boils at 100°C'`}</div>
          <div>{`};`}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <h3>Unless</h3>
          <div>{`const testUnless = () => {`}</div>
          <div>{`const safeInc1 = R.unless(R.isNil, R.inc);`}</div>
          <div>{`console.log(safeInc1(null)); //=> null`}</div>
          <div>{`console.log(safeInc1(1)); //=> 2`}</div>
          <div>&nbsp;</div>
          <div>{`console.log('testUnless2');`}</div>
          <div>{`// const safeInc = R.unless(R.equals(4), R.inc);`}</div>
          <div>{`const safeInc2 = R.unless((i: number) => (i % 2 !== 0), R.multiply(2));`}</div>
          <div>{`console.log('1', safeInc2(1)); // => 1`}</div>
          <div>{`console.log('2', safeInc2(2)); // => 4`}</div>
          <div>{`console.log('3', safeInc2(3)); // => 3`}</div>
          <div>{`console.log('4', safeInc2(4)); // => 8`}</div>
          <div>{`console.log('5', safeInc2(5)); // => 5`}</div>
          <div>{`console.log('6', safeInc2(6)); // => 12`}</div>
          <div>{`console.log('7', safeInc2(7)); // => 7`}</div>
          <div>{`console.log('8', safeInc2(8)); // => 16`}</div>
          <div>{`console.log('9', safeInc2(9)); // => 9`}</div>
          <div>&nbsp;</div>
          <div>{`console.log('testUnless3');`}</div>
          <div>{`const isNotNil = R.complement(R.isNil);`}</div>
          <div>{`const safeInc3 = R.unless(isNotNil, () => 'defaultValue');`}</div>
          <div>{`let c;`}</div>
          <div>{`console.log('1', safeInc3(1));`}</div>
          <div>{`console.log('2', safeInc3(c));`}</div>
          <div>{`};`}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <h3>R.when</h3>
          <div>{`const testWhen = () => {`}</div>
          <div>{`// truncate :: String -> String`}</div>
          <div>{`const truncate = R.when(`}</div>
          <div>{`R.propSatisfies(R.gt((R as any).__, 10) as any, 'length'),`}</div>
          <div>{`R.pipe(R.take(10), R.append('…'), R.join(''))`}</div>
          <div>{`);`}</div>
          <div>{`console.log(truncate('12345' as any)); //=> '12345'`}</div>
          <div>{`console.log(truncate('0123456789ABC' as any)); //=> '0123456789…'`}</div>
          <div>{`};`}</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    );
  }
}
