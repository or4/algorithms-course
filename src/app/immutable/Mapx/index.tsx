import React from 'react';
import * as R from 'ramda';
import { Map } from 'immutable';

type Props = {
};
type State = {
};

export class Mapx extends React.PureComponent<Props, State> {
  render() {

    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);


    return (
      <div>
        <h3>Map</h3>
        {map1.get('b') + ' vs. ' + map2.get('b')}
      </div>
    );
  }
}
