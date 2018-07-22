import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Algorithms } from 'algorithms';
import { AnimateSimple } from 'animate/AnimateSimple';
import { PasswordRegExp } from 'regexp/PasswordRegExp';
import LoadingScreenExample from 'hoc/LoadingScreenExample';
import KentDodds from 'kentDodds';
import HolyJs from 'holyjs';
import { RefsWithChild } from 'refs';

type Props = {
};
type State = {
};
const routes = [
  { route: '/', link: 'Home' },
  { route: '/algorithms', link: 'algorithms' },
  { route: '/animate', link: 'animate' },
  { route: '/hoc', link: 'hoc' },
  { route: '/holyjs', link: 'holyjs' },
  { route: '/kent-dodds', link: 'kent-dodds' },
  { route: '/refs', link: 'refs' },
  { route: '/regexp', link: 'regexp' },
];
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
          {routes.map((item, index) =>
            <Link key={index} style={style.link} to={item.route}>{item.link}</Link>)}
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path="/algorithms" component={Algorithms} />
            <Route path="/animate" component={AnimateSimple} />
            <Route path="/hoc" component={LoadingScreenExample} />
            <Route path="/holyjs" component={HolyJs} />
            <Route path="/kent-dodds" component={KentDodds} />
            <Route path="/refs" component={RefsWithChild} />
            <Route path="/regexp" component={PasswordRegExp} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;


// import Ex2 from './excerices/Ex2';
// import Test1 from './test/Test1';
// import LoadingScreenExample from './hoc/LoadingScreenExample';
// import Test1Format from './fp/Test1Format';
// import { result } from './fp/Transducer';
// import { result } from './fp/ramda/CurryN';
// import { result } from './fp/ramda/Compose';
// import { result } from './animate/Test1';
// import { result } from './js/scope/this1';
// import { result } from './js/scope/scope';

// const App = () => (
//   <div>
//     {result}
//   </div>
// );