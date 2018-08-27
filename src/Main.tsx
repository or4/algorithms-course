import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Algorithms } from 'app/algorithms';
import { Animate } from 'app/animate';
import { Ast } from 'app/ast';
import { Css } from 'app/css';
import { Hoc } from 'app/hoc';
import { HolyJs } from 'app/holyjs';
import { Immutable } from 'app/immutable';
import { Jss } from 'app/jss';
import { KentDodds } from 'app/kentDodds';
import { Lodash } from 'app/lodash';
import { NN } from 'app/nn';
import { Probability } from 'app/probability';
import { Ramda } from 'app/ramda';
import { Reflection } from 'app/reflection';
import { Refs } from 'app/refs';
import { Regexp } from 'app/regexp';
import { RxJs } from 'app/rx';
import { Sanctuary } from 'app/sanctuary';
import { Svg } from 'app/svg';

type Props = {
};
type State = {
};
const routes = {
  algorithms: '/algorithms',
  animate: '/animate',
  ast: '/ast',
  css: '/css',
  hoc: '/hoc',
  holyjs: '/holyjs',
  immutable: '/immutable',
  jss: '/jss',
  kentDodds: '/kent-dodds',
  lodash: '/lodash',
  nn: '/nn',
  probability: '/probability',
  ramda: '/ramda',
  reflection: '/reflection',
  refs: '/refs',
  regexp: '/regexp',
  rxjs: '/rxjs',
  sanctuary: '/sanctuary',
  svg: '/svg',
};

class Main extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={routes.algorithms}>algorithms</Link>
          <Link to={routes.animate}>animate</Link>
          <Link to={routes.ast}>ast</Link>
          <Link to={routes.css}>css</Link>
          <Link to={routes.hoc}>hoc</Link>
          <Link to={routes.holyjs}>holyjs</Link>
          <Link to={routes.immutable}>immutable</Link>
          <Link to={routes.jss}>jss</Link>
          <Link to={routes.kentDodds}>kent-dodds</Link>
          <Link to={routes.lodash}>lodash</Link>
          <Link to={routes.nn}>nn</Link>
          <Link to={routes.probability}>probability</Link>
          <Link to={routes.ramda}>ramda</Link>
          <Link to={routes.reflection}>reflection</Link>
          <Link to={routes.refs}>refs</Link>
          <Link to={routes.regexp}>regexp</Link>
          <Link to={routes.rxjs}>rxjs</Link>
          <Link to={routes.sanctuary}>sanctuary</Link>
          <Link to={routes.svg}>svg</Link>
        </div>

        <Switch>
          <Route path={routes.algorithms} component={Algorithms} />
          <Route path={routes.animate} component={Animate} />
          <Route path={routes.ast} component={Ast} />
          <Route path={routes.css} component={Css} />
          <Route path={routes.hoc} component={Hoc} />
          <Route path={routes.holyjs} component={HolyJs} />
          <Route path={routes.immutable} component={Immutable} />
          <Route path={routes.jss} component={Jss} />
          <Route path={routes.kentDodds} component={KentDodds} />
          <Route path={routes.lodash} component={Lodash} />
          <Route path={routes.nn} component={NN} />
          <Route path={routes.probability} component={Probability} />
          <Route path={routes.ramda} component={Ramda} />
          <Route path={routes.reflection} component={Reflection} />
          <Route path={routes.refs} component={Refs} />
          <Route path={routes.regexp} component={Regexp} />
          <Route path={routes.rxjs} component={RxJs} />
          <Route path={routes.sanctuary} component={Sanctuary} />
          <Route path={routes.svg} component={Svg} />
        </Switch>
      </div>
    );
  }
}

export default Main;
