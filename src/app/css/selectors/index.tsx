import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { CssSelectorsGt } from './CssSelectorsGt';
import { CssSelectorsPlus } from './CssSelectorsPlus';
import { CssSelectorsTilda } from './CssSelectorsTilda';
import { CssSelectorsSpace } from './CssSelectorsSpace';

type Props = {
};
type State = {
};

export class CssSelectors extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/css/selectors/gt`}>&gt; as gt</Link>
          <Link to={`/css/selectors/plus`}>plus</Link>
          <Link to={`/css/selectors/tilda`}>tilda</Link>
          <Link to={`/css/selectors/space`}>space</Link>
        </div>
        <Switch>
          <Route path="/css/selectors/gt" component={CssSelectorsGt} />
          <Route path="/css/selectors/plus" component={CssSelectorsPlus} />
          <Route path="/css/selectors/tilda" component={CssSelectorsTilda} />
          <Route path="/css/selectors/space" component={CssSelectorsSpace} />
        </Switch>
      </div>
    );
  }
}
