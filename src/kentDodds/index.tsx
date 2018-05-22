import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import KentDoddsEx1 from './Ex1';
import KentDoddsEx2 from './Ex2';

type Props = {
};
type State = {
};
class KentDodds extends React.PureComponent<Props, State> {
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
    // const {  } = this.props;
    return (
      <div>
        <div>
          <Link style={style.link} to={`/kent-dodds/ex1`}>Ex1</Link>
          <Link style={style.link} to={`/kent-dodds/ex2`}>Ex2</Link>
        </div>
        <Switch>
          <Route path="/kent-dodds/ex1" component={KentDoddsEx1} />
          <Route path="/kent-dodds/ex2" component={KentDoddsEx2} />
        </Switch>
      </div>
    );
  }
}
export default KentDodds;
