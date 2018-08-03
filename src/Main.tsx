import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Algorithms } from 'app/algorithms';
import { Animate } from 'app/animate';
import { Ast } from 'app/ast';
import { Css } from 'app/css';
import { Hoc } from 'app/hoc';
import { HolyJs } from 'app/holyjs';
import { Jss } from 'app/jss';
import { KentDodds } from 'app/kentDodds';
import { NN } from 'app/nn';
import { Probability } from 'app/probability';
import { Refs } from 'app/refs';
import { Regexp } from 'app/regexp';
import { RxJs } from 'app/rx';

type Props = {
};
type State = {
};
const routes = {
  home: '/',
  algorithms: '/algorithms',
  animate: '/animate',
  ast: '/ast',
  css: '/css',
  hoc: '/hoc',
  holyjs: '/holyjs',
  jss: '/jss',
  kentDodds: '/kent-dodds',
  nn: '/nn',
  probability: '/probability',
  refs: '/refs',
  regexp: '/regexp',
  rxjs: '/rxjs',
};

class Main extends React.PureComponent<Props, State> {
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
          <Link style={style.link} to={routes.home}>Home</Link>
          <Link style={style.link} to={routes.algorithms}>algorithms</Link>
          <Link style={style.link} to={routes.animate}>animate</Link>
          <Link style={style.link} to={routes.ast}>ast</Link>
          <Link style={style.link} to={routes.css}>css</Link>
          <Link style={style.link} to={routes.hoc}>hoc</Link>
          <Link style={style.link} to={routes.holyjs}>holyjs</Link>
          <Link style={style.link} to={routes.jss}>jss</Link>
          <Link style={style.link} to={routes.kentDodds}>kent-dodds</Link>
          <Link style={style.link} to={routes.nn}>NN</Link>
          <Link style={style.link} to={routes.probability}>probability</Link>
          <Link style={style.link} to={routes.refs}>refs</Link>
          <Link style={style.link} to={routes.regexp}>regexp</Link>
          <Link style={style.link} to={routes.rxjs}>rxjs</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path={routes.algorithms} component={Algorithms} />
            <Route path={routes.animate} component={Animate} />
            <Route path={routes.ast} component={Ast} />
            <Route path={routes.css} component={Css} />
            <Route path={routes.hoc} component={Hoc} />
            <Route path={routes.holyjs} component={HolyJs} />
            <Route path={routes.jss} component={Jss} />
            <Route path={routes.kentDodds} component={KentDodds} />
            <Route path={routes.nn} component={NN} />
            <Route path={routes.probability} component={Probability} />
            <Route path={routes.refs} component={Refs} />
            <Route path={routes.regexp} component={Regexp} />
            <Route path={routes.rxjs} component={RxJs} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;
