import React from 'react';
import * as async from 'async';
import axios from 'axios';

type Props = {};
type State = {
};
const urls: any[] = [
  'https://api.coinmarketcap.com/v2/ticker',
  'https://api.coinmarketcap.com/v2/ticker',
  'https://api.coinmarketcap.com/v2/ticker',
  'https://api.coinmarketcap.com/v2/ticker',
  'https://api.coinmarketcap.com/v2/ticker',
  'https://api.coinmarketcap.com/v2/ticker',
];

async function test() {
  async.parallelLimit(
    urls.map(
      url => async (callback: Function) => {
        const res = await axios.get(url);
        callback('Some Error!', res.data);
      }
    ) as any,
    3,
    function(err, results) {
      console.log('err', err);
      console.log('results', results);
    }
  );
}


async function testPromise() {
  async.parallel(urls.map(url => {
    return async (callback: Function) => {
      const res = await axios.get(url);
      callback(null, res.data);
    };
  }),
  function(err, results) {
    console.log('err', err);
    console.log('results', results);
  });
}

async function testWithSetTimeout2() {
  async.parallel(urls.map(url => {
    return (callback: Function) => {
      setTimeout(() => { callback(null, url) }, 1000);
    };
  }),
  function(err, results) {
    console.log('err', err);
    console.log('results', results);
  });
}

async function testWithSetTimeout() {
  async.parallel([
    (callback) => {
      setTimeout(() => { callback(null, 'one') }, 1000);
    },
    (callback) => {
      setTimeout(() => { callback(null, 'two') }, 1000);
    },
  ],
  function(err, results) {
    console.log('err', err);
    console.log('results', results);
  });
}

// test().then(() => {
//   console.log('test done1');
// });

export class ParallelLimitLib extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3>ParallelLimitLib - parallel do tasks that count limited, other tasks truncated! Run callback when some tasks done</h3>
      </div>
    );
  }
}
