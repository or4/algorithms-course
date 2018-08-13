import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import CssCounter from './Vitaliy Freedman/CssCounter';
import CssResponsive from './Vitaliy Freedman/CssResponsive';
import TTFMP_io from './Yandex/TTFMP_io';
import TTFMP_rAF from './Yandex/TTFMP_rAF';

type Props = {
};
type State = {
};

export class HolyJs extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/holyjs/Vitaliy Freedman/CssCounter`}>CssCounter</Link>
          <Link to={`/holyjs/Vitaliy Freedman/CssResponsive`}>CssResponsive</Link>
          <Link to={`/holyjs/Yandex/TTFCP`}>TTFCP</Link>
          <Link to={`/holyjs/Yandex/TTFMP_rAF`}>TTFMP_rAF</Link>
          <Link to={`/holyjs/Yandex/TTFMP_rAF`}>TTFMP_rAF</Link>
        </div>
        <Switch>
          <Route path="/holyjs/Vitaliy Freedman/CssCounter" component={CssCounter} />
          <Route path="/holyjs/Vitaliy Freedman/CssResponsive" component={CssResponsive} />
          <Route path="/holyjs/Yandex/TTFMP_rAF" component={TTFMP_rAF} />
          <Route path="/holyjs/Yandex/TTFCP_io" component={TTFMP_io} />
        </Switch>
      </div>
    );
  }
}
