import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { CssSelectors } from './selectors';

type Props = {
};
type State = {
};

export class Css extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/css/selectors`}>Selectors</Link>
        </div>
        <Switch>
          <Route path="/css/selectors" component={CssSelectors} />
        </Switch>
      </div>
    );
  }
}
