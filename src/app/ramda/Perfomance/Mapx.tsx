import React from 'react';
import * as R from 'ramda';
import * as _ from 'lodash/fp';
import { List } from 'immutable';

type Props = {
};
type State = {
};

function isOdd(num: number) {
  return true;// num % 2 === 1;
}
function square(num: number) {
  return num * 2;
}

const getFilledArray = (pow: number) => {
  const arr = [];
  for (let i = 0; i < pow; i++) {
    arr.push(Math.random() * pow >> 0);
  }
  return arr;
};

const getTimeForRamda = (pow: number) => {
  let arr = getFilledArray(pow);
  console.log(arr.length);
  const dateFrom = new Date();
  const result = R.map(square, R.filter(isOdd, arr));
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  console.log('ramda', R.take(5, result));
  console.log('ramda', result.length.toLocaleString());
  return { arrLength: arr.length, time: msDone };
};

const getTimeForVanila = (pow: number) => {
  const arr = getFilledArray(pow);
  console.log(arr.length);
  const dateFrom = new Date();
  const result = arr.filter(isOdd).map(square);
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  console.log('vanila', R.take(5, result));
  console.log('vanila', result.length.toLocaleString());
  return { arrLength: arr.length, time: msDone };
};

const getTimeForLodashFp = (pow: number) => {
  let arr = getFilledArray(pow);
  console.log(arr.length);
  const dateFrom = new Date();
  // const result = _.map(_.filter(isOdd, arr), square);
  const result = _.flow(
    _.filter(isOdd),
    _.map(square)
  )(arr);
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  console.log('lodash', R.take(5, result));
  console.log('lodash', result.length.toLocaleString());
  return { arrLength: arr.length, time: msDone };
};

export class Mapx extends React.PureComponent<Props, State> {
  render() {
    const pow = Math.pow(10, 7);

    const ramdaResult = getTimeForRamda(pow);
    const loResult = getTimeForLodashFp(pow);
    const vanilaResult = getTimeForVanila(pow);

    return (
      <div>
        <h3>Filter by odd, then map array with n*n operation</h3>
        <h5>array length: {pow.toLocaleString()}</h5>

        <h5>Benchmark ramda</h5>
        <div>time: {ramdaResult.time}ms</div>

        <h5>Benchmark lodash fp</h5>
        <div>time: {loResult.time}ms</div>

        <h5>Benchmark vanila</h5>
        <div>time: {vanilaResult.time}ms</div>
      </div>
    );
  }
}
