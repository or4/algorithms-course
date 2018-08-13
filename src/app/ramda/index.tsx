import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Maths } from './Maths';
import { Relation } from './Relation';
import { Logic } from './Logic';
import { Functions } from './Functions';
import { Objects } from './Objects';
import { Lists } from './Lists';

type Props = {
};
type State = {
};

export class Ramda extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/maths`}>Maths</Link>
          <Link to={`/ramda/relation`}>Relation</Link>
          <Link to={`/ramda/logic`}>Logic</Link>
          <Link to={`/ramda/functions`}>Functions</Link>
          <Link to={`/ramda/objects`}>Objects</Link>
          <Link to={`/ramda/lists`}>Lists</Link>
        </div>

        <Switch>
          <Route path="/ramda/maths" component={Maths} />
          <Route path="/ramda/relation" component={Relation} />
          <Route path="/ramda/logic" component={Logic} />
          <Route path="/ramda/functions" component={Functions} />
          <Route path="/ramda/objects" component={Objects} />
          <Route path="/ramda/lists" component={Lists} />
        </Switch>
      </div>
    );
  }
}
