import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Compose } from './Compose';
import { ComposeP } from './ComposeP';
import { Сurry } from './\u0421urry';
import { Partial } from './Partial';
import { Uncurry } from './Uncurry';
import { Flip } from './Flip';
import { Apply } from './Apply';
import { Converge } from './Converge';
import { UseWith } from './UseWith';
import { Juxt } from './Juxt';
import { Unapply } from './Unapply';
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

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Functions extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/functions/compose`}>Сompose</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/compoesep`}>ComposeP</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/curry`}>Сurry</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/partial`}>Partial</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/uncurry`}>Uncurry</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/flip`}>Flip</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/apply`}>Apply</Link>

          <Link style={rawStyle.link} to={`/ramda/functions/converge`}>Converge</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/useWith`}>UseWith</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/juxt`}>Juxt</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/unapply`}>Unapply</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/unary`}>Unary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/binary`}>Binary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/nary`}>Nary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/identity`}>Identity</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/invoker`}>Invoker</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/once`}>Once</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/tap`}>Tap</Link>

          <Link style={rawStyle.link} to={`/ramda/functions/bind`}>Bind</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/lift`}>Lift</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/memoize`}>Memoize</Link>

        </div>
        <Switch>
          <Route path="/ramda/functions/compose" component={Compose} />
          <Route path="/ramda/functions/compoesep" component={ComposeP} />
          <Route path="/ramda/functions/curry" component={Сurry} />
          <Route path="/ramda/functions/partial" component={Partial} />
          <Route path="/ramda/functions/uncurry" component={Uncurry} />
          <Route path="/ramda/functions/flip" component={Flip} />
          <Route path="/ramda/functions/apply" component={Apply} />

          <Route path="/ramda/functions/converge" component={Converge} />
          <Route path="/ramda/functions/useWith" component={UseWith} />
          <Route path="/ramda/functions/juxt" component={Juxt} />
          <Route path="/ramda/functions/unapply" component={Unapply} />
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
