import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { CssSelectors } from './selectors';

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

export class Css extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/css/selectors`}>Selectors</Link>
        </div>
        <Switch>
          <Route path="/css/selectors" component={CssSelectors} />
        </Switch>
      </div>
    );
  }
}
