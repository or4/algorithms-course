import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Functions } from './Functions';
import { Lists } from './Lists';
import { Logic } from './Logic';
import { Maths } from './Maths';
import { Objects } from './Objects';
import { Relation } from './Relation';

type Props = {
};
type State = {
};

export class Ramda extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/functions`}>functions</Link>
          <Link to={`/ramda/lists`}>lists</Link>
          <Link to={`/ramda/logic`}>logic</Link>
          <Link to={`/ramda/maths`}>maths</Link>
          <Link to={`/ramda/objects`}>objects</Link>
          <Link to={`/ramda/relation`}>relation</Link>
        </div>

        <Switch>
          <Route path="/ramda/functions" component={Functions} />
          <Route path="/ramda/lists" component={Lists} />
          <Route path="/ramda/logic" component={Logic} />
          <Route path="/ramda/maths" component={Maths} />
          <Route path="/ramda/objects" component={Objects} />
          <Route path="/ramda/relation" component={Relation} />
        </Switch>
      </div>
    );
  }
}
