import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Assoc } from './Assoc';
import { Clone } from './Clone';
import { Dissoc } from './Dissoc';
import { EqProps } from './EqProps';
import { Evolve } from './Evolve';
import { Filter } from './Filter';
import { Has } from './Has';
import { Keys } from './Keys';
import { Lens } from './Lens';
import { MapObjIndexed } from './MapObjIndexed';
import { Merge } from './Merge';
import { MergeAll } from './MergeAll';
import { MergeWith } from './MergeWith';
import { ObjOf } from './ObjOf';
import { Omit } from './Omit';
import { Pick } from './Pick';
import { PickAll } from './PickAll';
import { PickBy } from './PickBy';
import { Prop } from './Prop';
import { PropEq } from './PropEq';
import { PropIs } from './PropIs';
import { PropOr } from './PropOr';
import { Props } from './Props';
import { PropSatisfies } from './PropSatisfies';
import { Reject } from './Reject';
import { ToPairs } from './ToPairs';
import { Values } from './Values';
import { Where } from './Where';
import { WhereEq } from './WhereEq';
import { ZipObj } from './ZipObj';

type TProps = {
};
type State = {
};

export class Objects extends React.PureComponent<TProps, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/objects/assoc`}>assoc</Link>
          <Link to={`/ramda/objects/clone`}>clone</Link>
          <Link to={`/ramda/objects/dissoc`}>dissoc</Link>
          <Link to={`/ramda/objects/eqProps`}>eqProps</Link>
          <Link to={`/ramda/objects/evolve`}>evolve</Link>
          <Link to={`/ramda/objects/filter`}>filter / pickBy</Link>
          <Link to={`/ramda/objects/has`}>has</Link>
          <Link to={`/ramda/objects/keys`}>keys</Link>
          <Link to={`/ramda/objects/lens`}>lens / lensIndex / lensPath / lensProp</Link>
          <Link to={`/ramda/objects/map`}>mapObjIndexed</Link>
          <Link to={`/ramda/objects/merge`}>merge</Link>
          <Link to={`/ramda/objects/mergeAll`}>mergeAll</Link>
          <Link to={`/ramda/objects/mergeWith`}>mergeWith</Link>
          <Link to={`/ramda/objects/objOf`}>objOf</Link>
          <Link to={`/ramda/objects/omit`}>omit</Link>
          <Link to={`/ramda/objects/pick`}>pick</Link>
          <Link to={`/ramda/objects/pickBy`}>pickBy</Link>
          <Link to={`/ramda/objects/pickAll`}>pickAll</Link>
          <Link to={`/ramda/objects/prop`}>prop</Link>
          <Link to={`/ramda/objects/propEq`}>propEq</Link>
          <Link to={`/ramda/objects/propIs`}>propIs</Link>
          <Link to={`/ramda/objects/propOr`}>propOr</Link>
          <Link to={`/ramda/objects/props`}>props</Link>
          <Link to={`/ramda/objects/propsSatisfies`}>propsSatisfies</Link>
          <Link to={`/ramda/objects/reject`}>reject</Link>
          <Link to={`/ramda/objects/toPairs`}>toPairs / toPairsIn</Link>
          <Link to={`/ramda/objects/values`}>values / valuesIn</Link>
          <Link to={`/ramda/objects/where`}>where</Link>
          <Link to={`/ramda/objects/whereEq`}>whereEq</Link>
          <Link to={`/ramda/objects/zipObj`}>zip / zipObj / zipWith</Link>
        </div>
        <Switch>
          <Route path="/ramda/objects/assoc" component={Assoc} />
          <Route path="/ramda/objects/clone" component={Clone} />
          <Route path="/ramda/objects/dissoc" component={Dissoc} />
          <Route path="/ramda/objects/eqProps" component={EqProps} />
          <Route path="/ramda/objects/evolve" component={Evolve} />
          <Route path="/ramda/objects/filter" component={Filter} />
          <Route path="/ramda/objects/has" component={Has} />
          <Route path="/ramda/objects/keys" component={Keys} />
          <Route path="/ramda/objects/lens" component={Lens} />
          <Route path="/ramda/objects/map" component={MapObjIndexed} />
          <Route path="/ramda/objects/merge" component={Merge} />
          <Route path="/ramda/objects/mergeAll" component={MergeAll} />
          <Route path="/ramda/objects/mergeWith" component={MergeWith} />
          <Route path="/ramda/objects/objOf" component={ObjOf} />
          <Route path="/ramda/objects/omit" component={Omit} />
          <Route path="/ramda/objects/pick" component={Pick} />
          <Route path="/ramda/objects/pickBy" component={PickBy} />
          <Route path="/ramda/objects/pickAll" component={PickAll} />
          <Route path="/ramda/objects/prop" component={Prop} />
          <Route path="/ramda/objects/propEq" component={PropEq} />
          <Route path="/ramda/objects/propIs" component={PropIs} />
          <Route path="/ramda/objects/propOr" component={PropOr} />
          <Route path="/ramda/objects/props" component={Props} />
          <Route path="/ramda/objects/propsSatisfies" component={PropSatisfies} />
          <Route path="/ramda/objects/reject" component={Reject} />
          <Route path="/ramda/objects/toPairs" component={ToPairs} />
          <Route path="/ramda/objects/values" component={Values} />
          <Route path="/ramda/objects/where" component={Where} />
          <Route path="/ramda/objects/whereEq" component={WhereEq} />
          <Route path="/ramda/objects/zipObj" component={ZipObj} />
        </Switch>
      </div>
    );
  }
}
