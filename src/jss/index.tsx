import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SimpleJss } from 'jss/SimpleJss';

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

export class Jss extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/jss`}>jss with changing props</Link>
        </div>
        <Switch>
          <Route path="/jss" component={SimpleJss} />
        </Switch>
      </div>
    );
  }
}
