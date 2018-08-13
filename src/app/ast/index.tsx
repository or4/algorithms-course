import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Falafel } from './Falafel';
// import { Esprima } from './Esprima';

type Props = {
};
type State = {
};

/*
          <Route path="/ast/esprima" component={Esprima} />
          <Link style={rawStyle.link} to={`/ast/esprima`}>Esprima Example</Link>

         */
export class Ast extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ast/falafel`}>Falafel Example</Link>
        </div>
        <Switch>
          <Route path="/ast/falafel" component={Falafel} />
        </Switch>
      </div>
    );
  }
}
