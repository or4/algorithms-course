import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { MapObjIndexed } from './MapObjIndexed';

type Props = {
};
type State = {
};

export class Objects extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/objects/assoc`}>assoc</Link>
          <Link to={`/ramda/objects/clone`}>clone</Link>
          <Link to={`/ramda/objects/dissoc`}>dissoc</Link>
          <Link to={`/ramda/objects/eqProps`}>eqProps</Link>
          <Link to={`/ramda/objects/evolve`}>evolve</Link>
          <Link to={`/ramda/objects/filter`}>filter</Link>
          <Link to={`/ramda/objects/has`}>has</Link>
          <Link to={`/ramda/objects/keys`}>keys</Link>
          <Link to={`/ramda/objects/lens`}>lens</Link>
          <Link to={`/ramda/objects/map`}>mapObjIndexed</Link>
          <Link to={`/ramda/objects/merge`}>merge</Link>
          <Link to={`/ramda/objects/mergeAll`}>mergeAll</Link>
          <Link to={`/ramda/objects/mergeWith`}>mergeWith</Link>
          <Link to={`/ramda/objects/objOf`}>objOf</Link>
          <Link to={`/ramda/objects/omit`}>omit</Link>
          <Link to={`/ramda/objects/pick`}>pick</Link>
          <Link to={`/ramda/objects/prop`}>prop</Link>
          <Link to={`/ramda/objects/propEq`}>propEq</Link>
          <Link to={`/ramda/objects/propOr`}>propOr</Link>
          <Link to={`/ramda/objects/props`}>props</Link>
          <Link to={`/ramda/objects/propsSatisfies`}>propsSatisfies</Link>
          <Link to={`/ramda/objects/reject`}>reject</Link>
          <Link to={`/ramda/objects/toPairs`}>toPairs</Link>
          <Link to={`/ramda/objects/values`}>values</Link>
          <Link to={`/ramda/objects/where`}>where</Link>
          <Link to={`/ramda/objects/whereEq`}>whereEq</Link>
          <Link to={`/ramda/objects/zipObj`}>zipObj</Link>
        </div>
        <Switch>
          <Route path="/ramda/objects/assoc" component={MapObjIndexed} />
          <Route path="/ramda/objects/clone" component={MapObjIndexed} />
          <Route path="/ramda/objects/dissoc" component={MapObjIndexed} />
          <Route path="/ramda/objects/eqProps" component={MapObjIndexed} />
          <Route path="/ramda/objects/evolve" component={MapObjIndexed} />
          <Route path="/ramda/objects/filter" component={MapObjIndexed} />
          <Route path="/ramda/objects/has" component={MapObjIndexed} />
          <Route path="/ramda/objects/keys" component={MapObjIndexed} />
          <Route path="/ramda/objects/lens" component={MapObjIndexed} />
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
        </Switch>
      </div>
    );
  }
}
