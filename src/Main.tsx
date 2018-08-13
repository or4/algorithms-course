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
import { Ramda } from 'app/ramda';

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
  ramda: '/ramda',
  refs: '/refs',
  regexp: '/regexp',
  rxjs: '/rxjs',
};

class Main extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={routes.home}>Home</Link>
          <Link to={routes.algorithms}>algorithms</Link>
          <Link to={routes.animate}>animate</Link>
          <Link to={routes.ast}>ast</Link>
          <Link to={routes.css}>css</Link>
          <Link to={routes.hoc}>hoc</Link>
          <Link to={routes.holyjs}>holyjs</Link>
          <Link to={routes.jss}>jss</Link>
          <Link to={routes.kentDodds}>kent-dodds</Link>
          <Link to={routes.nn}>NN</Link>
          <Link to={routes.probability}>probability</Link>
          <Link to={routes.ramda}>ramda</Link>
          <Link to={routes.refs}>refs</Link>
          <Link to={routes.regexp}>regexp</Link>
          <Link to={routes.rxjs}>rxjs</Link>
        </div>

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
          <Route path={routes.ramda} component={Ramda} />
          <Route path={routes.refs} component={Refs} />
          <Route path={routes.regexp} component={Regexp} />
          <Route path={routes.rxjs} component={RxJs} />
        </Switch>
      </div>
    );
  }
}

export default Main;
