import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ProbabilityTheoryBasics } from './ProbabilityTheoryBasics';

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

export class Probability extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/nn/and`}>Basics</Link>
        </div>
        <Switch>
          <Route path="/nn/and" component={ProbabilityTheoryBasics} />
        </Switch>
      </div>
    );
  }
}
