import React from 'react';
import { mapLimit } from './mapLimit';

type Props = {};
type State = {
};


export class MapLimit extends React.Component<Props, State> {
  render() {

    mapLimit([
      'http1',
      'http2',
      'http3',
      'http4',
      'http5'
    ], 3).then((res) => {
      console.log('maplimit: ', res);
    });

    return (
      <div>
        <h3>MapLimit</h3>
      </div>
    );
  }
}
