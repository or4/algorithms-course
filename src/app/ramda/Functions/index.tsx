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
          <Link style={rawStyle.link} to={`/ramda/functions/compose`}>compose / pipe</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/curry`}>curry / uncurryN</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/partial`}>partial</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/flip`}>flip</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/apply`}>apply / unapply </Link>

          <Link style={rawStyle.link} to={`/ramda/functions/converge`}>converge</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/useWith`}>useWith</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/juxt`}>juxt</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/unary`}>unary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/binary`}>binary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/nary`}>nary</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/identity`}>identity</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/invoker`}>invoker</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/once`}>once</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/tap`}>tap</Link>

          <Link style={rawStyle.link} to={`/ramda/functions/bind`}>bind</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/lift`}>lift</Link>
          <Link style={rawStyle.link} to={`/ramda/functions/memoize`}>memoize</Link>

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
