import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Algorithms } from 'algorithms';
import { AnimateSimple } from 'animate/AnimateSimple';
import { HolyJs } from 'holyjs';
import { SimpleJss } from 'jss/SimpleJss';
import { KentDodds } from 'kentDodds';
import { LoadingScreenExample } from 'hoc/LoadingScreenExample';
import { PasswordRegExp } from 'regexp/PasswordRegExp';
import { RefsWithChild } from 'refs';
import { RxJs } from 'rx';
import { NN } from 'nn';

type Props = {
};
type State = {
};
const routes = {
  home: '/',
  algorithms: '/algorithms',
  animate: '/animate',
  hoc: '/hoc',
  holyjs: '/holyjs',
  jss: '/jss',
  kentDodds: '/kent-dodds',
  refs: '/refs',
  regexp: '/regexp',
  rxjs: '/rxjs',
  nn: '/nn',
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
          <Link style={style.link} to={routes.hoc}>hoc</Link>
          <Link style={style.link} to={routes.holyjs}>holyjs</Link>
          <Link style={style.link} to={routes.jss}>jss</Link>
          <Link style={style.link} to={routes.kentDodds}>kent-dodds</Link>
          <Link style={style.link} to={routes.nn}>NN</Link>
          <Link style={style.link} to={routes.refs}>refs</Link>
          <Link style={style.link} to={routes.regexp}>regexp</Link>
          <Link style={style.link} to={routes.rxjs}>rxjs</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path={routes.algorithms} component={Algorithms} />
            <Route path={routes.animate} component={AnimateSimple} />
            <Route path={routes.hoc} component={LoadingScreenExample} />
            <Route path={routes.holyjs} component={HolyJs} />
            <Route path={routes.jss} component={SimpleJss} />
            <Route path={routes.kentDodds} component={KentDodds} />
            <Route path={routes.nn} component={NN} />
            <Route path={routes.refs} component={PasswordRegExp} />
            <Route path={routes.regexp} component={RefsWithChild} />
            <Route path={routes.rxjs} component={RxJs} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;
