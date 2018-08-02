import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { EsprimaExample } from './EsprimaExample';

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
          <Link style={rawStyle.link} to={`/ast/esprima`}>Esprima Example</Link>
        </div>
        <Switch>
          <Route path="/ast/esprima" component={EsprimaExample} />
        </Switch>
      </div>
    );
  }
}
