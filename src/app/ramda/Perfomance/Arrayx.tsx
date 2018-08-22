import React from 'react';
import * as R from 'ramda';
import { List } from 'immutable';

type Props = {
};
type State = {
};

const getFilledArray = (pow: number) => {
  const arr = [];
  for (let i = 0; i < pow; i++) {
    arr.push(Math.random() * pow >> 0);
  }
  return arr;
};

const getTimeForRamda = (pow: number) => {
  let arr = getFilledArray(pow);
  const dateFrom = new Date();
  arr = R.assoc(String(arr.length), 9999, arr);
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: arr.length, time: msDone };
};

const getTimeForVanila = (pow: number) => {
  const arr = getFilledArray(pow);
  const dateFrom = new Date();
  arr.push(9999);
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: arr.length, time: msDone };
};

const getTimeForImmutable = (pow: number) => {
  const arrVanila = getFilledArray(pow);
  let arrImmutable = List(arrVanila);
  const dateFrom = new Date();
  arrImmutable = arrImmutable.push(9999);
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: pow, time: msDone };
};

const getTimeForRamdaFill = (pow: number) => {
  let arrRamda: number[] = [];
  const dateFrom = new Date();
  for (let i = 0; i < pow; i++) {
    arrRamda = R.assoc(String(arrRamda.length), Math.random() * pow >> 0, arrRamda);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: pow, time: msDone };
};

const getTimeForVanilaFill = (pow: number) => {
  let arrVanila = [];
  const dateFrom = new Date();
  for (let i = 0; i < pow; i++) {
    arrVanila.push(Math.random() * pow >> 0);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: pow, time: msDone };
};


const getTimeForImmutableFill = (pow: number) => {
  let arrImmutable = List();
  const dateFrom = new Date();
  for (let i = 0; i < pow; i++) {
    arrImmutable = arrImmutable.push(Math.random() * pow >> 0);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();
  return { arrLength: pow, time: msDone };
};

const getTimeForImmutableUsingVanilaFill = (pow: number) => {
  const dateFrom = new Date();
  const arrVanila = getFilledArray(pow);
  const msDone1 = new Date().valueOf() - dateFrom.valueOf();
  let arrImmutable = List(arrVanila);
  const msDone2 = new Date().valueOf() - dateFrom.valueOf();
  return { time1: msDone1, time2: msDone2 };
};


export class Arrayx extends React.PureComponent<Props, State> {
  render() {
    const pow = Math.pow(10, 7);

    const ramdaResult = getTimeForRamda(pow);
    const vanilaResult = getTimeForVanila(pow);
    const immutableResult = getTimeForImmutable(pow);


    const ramdaFillResult = getTimeForRamdaFill(pow);
    const vanilaFillResult = getTimeForVanilaFill(pow);
    const immutableFillResult = getTimeForImmutableFill(pow);
    const immutableUsingVanilaFillResult = getTimeForImmutableUsingVanilaFill(pow);

    return (
      <div>
        <h3>Push value to the end of the array</h3>
        <h5>array length: {pow.toLocaleString()}</h5>

        <h5>Benchmark ramda</h5>
        <div>time: {ramdaResult.time}ms</div>

        <h5>Benchmark vanila</h5>
        <div>time: {vanilaResult.time}ms</div>

        <h5>Benchmark immutable</h5>
        <div>time: {immutableResult.time}ms</div>


        <h3>Fill array random values</h3>
        <h5>array length: {pow.toLocaleString()}</h5>

        <h5>Benchmark ramda</h5>
        <div>time: {ramdaFillResult.time}ms</div>

        <h5>Benchmark vanila</h5>
        <div>time: {vanilaFillResult.time}ms</div>

        <h5>Benchmark immutable</h5>
        <div>time: {immutableFillResult.time}ms</div>

        <h5>Benchmark immutable using vanila</h5>
        <div>vanila time: {immutableUsingVanilaFillResult.time1}ms</div>
        <div>total time: {immutableUsingVanilaFillResult.time2}ms</div>

      </div>
    );
  }
}
