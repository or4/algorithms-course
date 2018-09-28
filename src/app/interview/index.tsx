import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Column31 } from './css/Column31';
import { Column32 } from './css/Column32';
import { TextOverflowEllipsis } from './css/TextOverflowEllipsis';


type Props = {
};
type State = {
};

export class Interview extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/interview/css/column31`}>Column31</Link>
          <Link to={`/interview/css/column32`}>Column32</Link>
          <Link to={`/interview/css/textOverflowEllipsis`}>TextOverflowEllipsis</Link>
        </div>

        <Switch>
          <Route path="/interview/css/column31" component={Column31} />
          <Route path="/interview/css/column32" component={Column32} />
          <Route path="/interview/css/textOverflowEllipsis" component={TextOverflowEllipsis} />
        </Switch>
      </div>
    );
  }
}
