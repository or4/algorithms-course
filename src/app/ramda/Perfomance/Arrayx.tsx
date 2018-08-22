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
  const countAttempts = 5;

  let arr = getFilledArray(pow);

  const dateFrom = new Date();
  for (let i = 0; i < countAttempts; i++) {
    arr = R.assoc(String(arr.length), 9999, arr);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();

  return { arrLength: arr.length, time: msDone / countAttempts };
};

const getTimeForVanila = (pow: number) => {
  const countAttempts = 5;

  const arr = getFilledArray(pow);

  const dateFrom = new Date();
  for (let i = 0; i < countAttempts; i++) {
    arr.push(9999);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();

  return { arrLength: arr.length, time: msDone / countAttempts };
};

const getTimeForImmutable = (pow: number) => {
  const countAttempts = 5;

  const arrVanila = getFilledArray(pow);
  let arrImmutable = List(arrVanila);

  const dateFrom = new Date();
  for (let i = 0; i < countAttempts; i++) {
    arrImmutable = arrImmutable.push(9999);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();

  return { arrLength: pow, time: msDone / countAttempts };
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
  const countAttempts = 1;
  let arrVanila = [];

  const dateFrom = new Date();
  for (let i = 0; i < pow; i++) {
    arrVanila.push(Math.random() * pow >> 0);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();

  return { arrLength: pow, time: msDone / countAttempts };
};


const getTimeForImmutableFill = (pow: number) => {
  const countAttempts = 1;
  let arrImmutable = List();

  const dateFrom = new Date();
  for (let i = 0; i < pow; i++) {
    arrImmutable = arrImmutable.push(Math.random() * pow >> 0);
  }
  const msDone = new Date().valueOf() - dateFrom.valueOf();

  return { arrLength: pow, time: msDone / countAttempts };
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
    const pow = Math.pow(10, 6);

    const ramdaResult = getTimeForRamda(pow);
    const vanilaResult = getTimeForVanila(pow);
    const immutableResult = getTimeForImmutable(pow);


    const ramdaFillResult = getTimeForRamdaFill(pow);
    const vanilaFillResult = getTimeForVanilaFill(pow);
    const immutableFillResult = getTimeForImmutableFill(pow);
    const immutableUsingVanilaFillResult = getTimeForImmutableUsingVanilaFill(pow);

    return (
      <div>
        <h3>Initial data</h3>
        <h5>array length: {pow.toLocaleString()}</h5>
        <h5>Push value to the end of the array</h5>

        <h3>Benchmark ramda</h3>
        <div>avg time: {ramdaResult.time}ms</div>
        <div>whan arr lenght like 10**7 avg time is 1.5sec</div>

        <h3>Benchmark vanila</h3>
        <div>avg time: {vanilaResult.time}ms</div>

        <h3>Benchmark immutable</h3>
        <div>avg time: {immutableResult.time}ms</div>



        <h3>Fill array random values</h3>
        <h5>array length: {pow.toLocaleString()}</h5>

        <h3>Benchmark ramda</h3>
        <div>avg time: {ramdaFillResult.time}ms</div>

        <h3>Benchmark vanila</h3>
        <div>avg time: {vanilaFillResult.time}ms</div>

        <h3>Benchmark immutable</h3>
        <div>avg time: {immutableFillResult.time}ms</div>

        <h3>Benchmark immutable using vanila</h3>
        <div>vanila time: {immutableUsingVanilaFillResult.time1}ms</div>
        <div>total time: {immutableUsingVanilaFillResult.time2}ms</div>

      </div>
    );
  }
}
