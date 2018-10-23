import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { CssSelectors } from './selectors';
import { FirstLetter } from './FirstLetter';
import { Before } from './Before';
import { Selection } from './Selection';

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
          <Link to={`/css/FirstLetter`}>FirstLetter</Link>
          <Link to={`/css/Before`}>Before / After</Link>
          <Link to={`/css/Selection`}>Selection</Link>
        </div>
        <Switch>
          <Route path="/css/selectors" component={CssSelectors} />
          <Route path="/css/FirstLetter" component={FirstLetter} />
          <Route path="/css/Before" component={Before} />
          <Route path="/css/Selection" component={Selection} />
        </Switch>
      </div>
    );
  }
}
