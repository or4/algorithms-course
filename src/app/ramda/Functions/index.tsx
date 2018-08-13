import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Compose } from './Compose';
import { Curry } from './Curry';
import { Partial } from './Partial';
import { Flip } from './Flip';
import { Apply } from './Apply';
import { Converge } from './Converge';
import { UseWith } from './UseWith';
import { Juxt } from './Juxt';
import { Unary } from './Unary';
import { Binary } from './Binary';
import { Nary } from './Nary';
import { Identity } from './Identity';
import { Invoker } from './Invoker';
import { Once } from './Once';
import { Tap } from './Tap';
import { Bind } from './Bind';
import { Lift } from './Lift';
import { Memoize } from './Memoize';

type Props = {
};
type State = {
};

export class Functions extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/functions/compose`}>compose / pipe</Link>
          <Link to={`/ramda/functions/curry`}>curry / uncurryN</Link>
          <Link to={`/ramda/functions/partial`}>partial</Link>
          <Link to={`/ramda/functions/flip`}>flip</Link>
          <Link to={`/ramda/functions/apply`}>apply / unapply </Link>

          <Link to={`/ramda/functions/converge`}>converge</Link>
          <Link to={`/ramda/functions/useWith`}>useWith</Link>
          <Link to={`/ramda/functions/juxt`}>juxt</Link>
          <Link to={`/ramda/functions/unary`}>unary</Link>
          <Link to={`/ramda/functions/binary`}>binary</Link>
          <Link to={`/ramda/functions/nary`}>nary</Link>
          <Link to={`/ramda/functions/identity`}>identity</Link>
          <Link to={`/ramda/functions/invoker`}>invoker</Link>
          <Link to={`/ramda/functions/once`}>once</Link>
          <Link to={`/ramda/functions/tap`}>tap</Link>

          <Link to={`/ramda/functions/bind`}>bind</Link>
          <Link to={`/ramda/functions/lift`}>lift</Link>
          <Link to={`/ramda/functions/memoize`}>memoize</Link>

        </div>
        <Switch>
          <Route path="/ramda/functions/compose" component={Compose} />
          <Route path="/ramda/functions/curry" component={Curry} />
          <Route path="/ramda/functions/partial" component={Partial} />
          <Route path="/ramda/functions/flip" component={Flip} />
          <Route path="/ramda/functions/apply" component={Apply} />

          <Route path="/ramda/functions/converge" component={Converge} />
          <Route path="/ramda/functions/useWith" component={UseWith} />
          <Route path="/ramda/functions/juxt" component={Juxt} />
          <Route path="/ramda/functions/unary" component={Unary} />
          <Route path="/ramda/functions/binary" component={Binary} />
          <Route path="/ramda/functions/nary" component={Nary} />
          <Route path="/ramda/functions/identity" component={Identity} />
          <Route path="/ramda/functions/invoker" component={Invoker} />
          <Route path="/ramda/functions/once" component={Once} />
          <Route path="/ramda/functions/tap" component={Tap} />

          <Route path="/ramda/functions/bind" component={Bind} />
          <Route path="/ramda/functions/lift" component={Lift} />
          <Route path="/ramda/functions/memoize" component={Memoize} />
        </Switch>
      </div>
    );
  }
}
