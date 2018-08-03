import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { PasswordRegExp } from './PasswordRegExp';

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

export class Regexp extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/regexp`}>regexp with some pwd mask</Link>
        </div>
        <Switch>
          <Route path="/regexp" component={PasswordRegExp} />
        </Switch>
      </div>
    );
  }
}
