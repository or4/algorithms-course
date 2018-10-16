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
  async.map(
    urls,
    async (url, callback: Function) => {
      const res = await axios.get(url);
      callback('Test some Error!', res.data);
    },
    function(err, results) {
      console.log('err', err);
      console.log('results', results);
    }
  ); // return undefined
}

test().then(() => {
  console.log('test done1');
});

export class MapLimitLib extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3>MapLimit</h3>
      </div>
    );
  }
}
