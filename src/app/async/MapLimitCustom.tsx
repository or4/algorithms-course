import React from 'react';
import { mapLimit } from './mapLimit';

type Props = {};
type State = {
};


export class MapLimitCustom extends React.Component<Props, State> {
  render() {
    const urls = [
      'http1',
      'http2',
      'http3',
      'http4',
      'http5'
    ];
    mapLimit(urls, 3).then((res) => {
      console.log('maplimit: ', res);

      mapLimit(urls, 3).then((res) => {
        console.log('second maplimit: ', res);
      });
    });


    return (
      <div>
        <h3>MapLimit - custom implementation, do all tasks, do next if previous done</h3>
      </div>
    );
  }
}
