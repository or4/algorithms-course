import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Apply } from './Apply';
import { Binary } from './Binary';
import { Bind } from './Bind';
import { Compose } from './Compose';
import { Converge } from './Converge';
import { Curry } from './Curry';
import { Flip } from './Flip';
import { Identity } from './Identity';
import { Invoker } from './Invoker';
import { Juxt } from './Juxt';
import { Lift } from './Lift';
import { Memoize } from './Memoize';
import { NAry } from './NAry';
import { Nth } from './Nth';
import { NthArg } from './NthArg';
import { Once } from './Once';
import { Partial } from './Partial';
import { Tap } from './Tap';
import { UseWith } from './UseWith';


type Props = {
};
type State = {
};

export class Functions extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <div>
            <Link to={`/ramda/functions/apply`}>apply / unapply </Link>
            <Link to={`/ramda/functions/binary`}>binary</Link>
            <Link to={`/ramda/functions/bind`}>bind</Link>
            <Link to={`/ramda/functions/compose`}>compose / pipe</Link>
            <Link to={`/ramda/functions/converge`}>converge</Link>
            <Link to={`/ramda/functions/curry`}>curry / uncurryN</Link>
            <Link to={`/ramda/functions/flip`}>flip</Link>
            <Link to={`/ramda/functions/identity`}>identity</Link>
          </div>
          <div>
            <Link to={`/ramda/functions/invoker`}>invoker</Link>
            <Link to={`/ramda/functions/juxt`}>juxt</Link>
            <Link to={`/ramda/functions/lift`}>lift</Link>
            <Link to={`/ramda/functions/memoize`}>memoize</Link>
            <Link to={`/ramda/functions/nary`}>nary</Link>
            <Link to={`/ramda/functions/nth`}>nth</Link>
            <Link to={`/ramda/functions/nthArg`}>nthArg</Link>
            <Link to={`/ramda/functions/once`}>once</Link>
            <Link to={`/ramda/functions/partial`}>partial / partialRight</Link>
            <Link to={`/ramda/functions/tap`}>tap</Link>
            <Link to={`/ramda/functions/useWith`}>useWith</Link>
          </div>
        </div>
        <Switch>
          <Route path="/ramda/functions/apply" component={Apply} />
          <Route path="/ramda/functions/binary" component={Binary} />
          <Route path="/ramda/functions/bind" component={Bind} />
          <Route path="/ramda/functions/compose" component={Compose} />
          <Route path="/ramda/functions/converge" component={Converge} />
          <Route path="/ramda/functions/curry" component={Curry} />
          <Route path="/ramda/functions/flip" component={Flip} />
          <Route path="/ramda/functions/identity" component={Identity} />
          <Route path="/ramda/functions/invoker" component={Invoker} />
          <Route path="/ramda/functions/juxt" component={Juxt} />
          <Route path="/ramda/functions/lift" component={Lift} />
          <Route path="/ramda/functions/memoize" component={Memoize} />
          <Route path="/ramda/functions/nary" component={NAry} />
          <Route path="/ramda/functions/nth" component={Nth} />
          <Route path="/ramda/functions/nthArg" component={NthArg} />
          <Route path="/ramda/functions/once" component={Once} />
          <Route path="/ramda/functions/partial" component={Partial} />
          <Route path="/ramda/functions/tap" component={Tap} />
          <Route path="/ramda/functions/useWith" component={UseWith} />
        </Switch>
      </div>
    );
  }
}
