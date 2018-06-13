import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AnimateExample1 from 'animate/AnimateExample1';

import TestPromises from 'async/TestPromises';
import TestPasswordRegExp from 'regexp/TestPasswordRegExp';
import LoadingScreenExample from 'hoc/LoadingScreenExample';
import KentDodds from 'kentDodds';
import HolyJs from 'holyjs';
import Refs from 'refs';

type Props = {
};
type State = {
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
          <Link style={style.link} to={`/`}>Home</Link>
          <Link style={style.link} to={`/animate`}>animate</Link>
          <Link style={style.link} to={`/async`}>async</Link>
          <Link style={style.link} to={`/regexp`}>regexp</Link>
          <Link style={style.link} to={`/hoc`}>hoc</Link>
          <Link style={style.link} to={`/kent-dodds`}>kent-dodds</Link>
          <Link style={style.link} to={`/holyjs`}>holyjs</Link>
          <Link style={style.link} to={`/refs`}>refs</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path="/animate" component={AnimateExample1} />
            <Route path="/async" component={TestPromises} />
            <Route path="/regexp" component={TestPasswordRegExp} />
            <Route path="/hoc" component={LoadingScreenExample} />
            <Route path="/kent-dodds" component={KentDodds} />
            <Route path="/holyjs" component={HolyJs} />
            <Route path="/refs" component={Refs} />
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