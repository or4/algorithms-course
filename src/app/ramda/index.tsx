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

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Ramda extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/maths`}>Maths</Link>
          <Link style={rawStyle.link} to={`/ramda/relation`}>Relation</Link>
          <Link style={rawStyle.link} to={`/ramda/logic`}>Logic</Link>
          <Link style={rawStyle.link} to={`/ramda/functions`}>Functions</Link>
          <Link style={rawStyle.link} to={`/ramda/objects`}>Objects</Link>
          <Link style={rawStyle.link} to={`/ramda/lists`}>Lists</Link>
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
