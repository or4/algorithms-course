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

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Maths extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/maths/add`}>Add</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/subtract`}>Subtract</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/multiply`}>Multiply</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/divide`}>Divide</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/inc`}>Inc</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/dec`}>Dec</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/negate`}>Negate</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/modulo`}>Modulo</Link>
          <Link style={rawStyle.link} to={`/ramda/maths/test`}>Test</Link>
        </div>
        <Switch>
          <Route path="/ramda/maths/add" component={Add} />
          <Route path="/ramda/maths/subtract" component={Subtract} />
          <Route path="/ramda/maths/multiply" component={Multiply} />
          <Route path="/ramda/maths/divide" component={Divide} />
          <Route path="/ramda/maths/inc" component={Inc} />
          <Route path="/ramda/maths/dec" component={Dec} />
          <Route path="/ramda/maths/negate" component={Negate} />
          <Route path="/ramda/maths/modulo" component={Modulo} />
          <Route path="/ramda/maths/test" component={Test} />
        </Switch>
      </div>
    );
  }
}
