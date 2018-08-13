import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Add } from 'app/ramda/Maths/Add';
import { Subtract } from './Substract';
import { Multiply } from './Multiply';
import { Divide } from './Divide';
import { Inc } from './Inc';
import { Dec } from './Dec';
import { Negate } from './Negate';
import { Modulo } from './Modulo';
import { Test } from './Test';

type Props = {
};
type State = {
};

export class Maths extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/maths/add`}>add</Link>
          <Link to={`/ramda/maths/dec`}>dec</Link>
          <Link to={`/ramda/maths/divide`}>divide</Link>
          <Link to={`/ramda/maths/inc`}>inc</Link>
          <Link to={`/ramda/maths/modulo`}>modulo</Link>
          <Link to={`/ramda/maths/multiply`}>multiply</Link>
          <Link to={`/ramda/maths/negate`}>negate</Link>
          <Link to={`/ramda/maths/subtract`}>subtract</Link>
          <Link to={`/ramda/maths/test`}>test</Link>
        </div>
        <Switch>
          <Route path="/ramda/maths/add" component={Add} />
          <Route path="/ramda/maths/dec" component={Dec} />
          <Route path="/ramda/maths/divide" component={Divide} />
          <Route path="/ramda/maths/inc" component={Inc} />
          <Route path="/ramda/maths/modulo" component={Modulo} />
          <Route path="/ramda/maths/multiply" component={Multiply} />
          <Route path="/ramda/maths/negate" component={Negate} />
          <Route path="/ramda/maths/subtract" component={Subtract} />
          <Route path="/ramda/maths/test" component={Test} />
        </Switch>
      </div>
    );
  }
}
