import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Maths } from './Maths';
import { Relation } from './Relation';


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
        </div>
        <Switch>
          <Route path="/ramda/maths" component={Maths} />
          <Route path="/ramda/relation" component={Relation} />
        </Switch>
      </div>
    );
  }
}
