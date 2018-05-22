import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AnimateExample1 from 'animate/AnimateExample1';

import TestPromises from 'async/TestPromises';
import TestPasswordRegExp from 'regexp/TestPasswordRegExp';

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
          <Link style={style.link} to={`/AnimateExample1`}>animate</Link>
          <Link style={style.link} to={`/Async/TestPromises`}>async</Link>
          <Link style={style.link} to={`/TestPasswordRegExp`}>TestPasswordRegExp</Link>
        </div>
        <Switch>
          <Route path="/AnimateExample1" component={AnimateExample1} />
          <Route path="/Async/TestPromises" component={TestPromises} />
          <Route path="/TestPasswordRegExp" component={TestPasswordRegExp} />
        </Switch>
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