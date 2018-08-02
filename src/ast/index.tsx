import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Falafel } from './Falafel';
import { Esprima } from './Esprima';

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

export class Ast extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ast/falafel`}>Falafel Example</Link>
          <Link style={rawStyle.link} to={`/ast/esprima`}>Esprima Example</Link>
        </div>
        <Switch>
          <Route path="/ast/falafel" component={Falafel} />
          <Route path="/ast/esprima" component={Esprima} />
        </Switch>
      </div>
    );
  }
}
