import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import CssCounter from './Vitaliy Freedman/CssCounter';
import CssResponsive from './Vitaliy Freedman/CssResponsive';

type Props = {
};
type State = {
};

class HolyJs extends React.PureComponent<Props, State> {
  getStyle = () => {
    const link = {
      display: 'inline-block',
      padding: '10px',
    };
    return {
      link,
    };
  }
  render() {
    const style = this.getStyle();

    return (
      <div>
        <div>
          <Link style={style.link} to={`/holyjs/Vitaliy Freedman/CssCounter`}>CssCounter</Link>
          <Link style={style.link} to={`/holyjs/Vitaliy Freedman/CssResponsive`}>CssResponsive</Link>
        </div>
        <Switch>
          <Route path="/holyjs/Vitaliy Freedman/CssCounter" component={CssCounter} />
          <Route path="/holyjs/Vitaliy Freedman/CssResponsive" component={CssResponsive} />
        </Switch>
      </div>
    );
  }
}
export default HolyJs;
