import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { MapObjIndexed } from './MapObjIndexed';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Objects extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/objects/map`}>MapObjIndexed</Link>
        </div>
        <Switch>
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
        </Switch>
      </div>
    );
  }
}
