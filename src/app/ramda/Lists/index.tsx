import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { AddIndex } from './AddIndex';
import { Adjust } from './Adjust';
import { All } from './All';
import { Any } from './Any';
import { Append } from './Append';
import { Chain } from './Chain';
import { Concat } from './Concat';
import { Contains } from './Contains';
import { Difference } from './Difference';
import { Drop } from './Drop';
import { FromPairs } from './FromPairs';
import { Find } from './Find';
import { FindIndex } from './FindIndex';
import { FindLast } from './FindLast';
import { FindLastIndex } from './FindLastIndex';
import { GroupBy } from './GroupBy';
import { Head } from './Head';
import { IndexBy } from './IndexBy';
import { IndexOf } from './IndexOf';
import { Init } from './Init';
import { Insert } from './Insert';
import { InsertAll } from './InsertAll';
import { Intersection } from './Intersection';
import { Last } from './Last';
import { LastIndexOf } from './LastIndexOf';
import { Length } from './Length';
import { MapX } from './MapX';
import { Mean } from './Mean';
import { Median } from './Median';
import { None } from './None';
import { Nth } from './Nth';
import { Pair } from './Pair';
import { Pluck } from './Pluck';
import { Prepend } from './Prepend';
import { Product } from './Product';
import { Range } from './Range';
import { Reduce } from './Reduce';
import { Reject } from './Reject';
import { Remove } from './Remove';
import { Reverse } from './Reverse';
import { Scan } from './Scan';
import { Slice } from './Slice';
import { Sort } from './Sort';
import { Split } from './Split';
import { Sum } from './Sum';
import { Take } from './Take';
import { TakeLast } from './TakeLast';
import { TakeLastWhile } from './TakeLastWhile';
import { TakeWhile } from './TakeWhile';
import { Transduce } from './Transduce';
import { Union } from './Union';
import { UnionWith } from './UnionWith';
import { Uniq } from './Uniq';
import { UniqWith } from './UniqWith';
import { Update } from './Update';
import { Without } from './Without';
import { Zip } from './Zip';

type TProps = {
};
type State = {
};

export class Lists extends React.PureComponent<TProps, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/lists/addIndex`}>addIndex</Link>
          <Link to={`/ramda/lists/adjust`}>adjust</Link>
          <Link to={`/ramda/lists/all`}>all</Link>
          <Link to={`/ramda/lists/any`}>any</Link>
          <Link to={`/ramda/lists/append`}>append</Link>
          <Link to={`/ramda/lists/chain`}>chain</Link>
          <Link to={`/ramda/lists/concat`}>concat</Link>
          <Link to={`/ramda/lists/contains`}>contains</Link>
          <Link to={`/ramda/lists/difference`}>difference / differenceWith</Link>
          <Link to={`/ramda/lists/drop`}>drop / dropLast / dropLastWhile / dropWhile</Link>
          <Link to={`/ramda/lists/filter`}>filter</Link>
          <Link to={`/ramda/lists/find`}>find</Link>
          <Link to={`/ramda/lists/findIndex`}>findIndex</Link>
          <Link to={`/ramda/lists/findLast`}>findLast</Link>
          <Link to={`/ramda/lists/findLastIndex`}>findLastIndex</Link>
          <Link to={`/ramda/lists/fromPairs`}>fromPairs</Link>
          <Link to={`/ramda/lists/groupBy`}>groupBy</Link>
          <Link to={`/ramda/lists/head`}>head</Link>
          <Link to={`/ramda/lists/indexBy`}>indexBy</Link>
          <Link to={`/ramda/lists/indexOf`}>indexOf</Link>
          <Link to={`/ramda/lists/init`}>init</Link>
          <Link to={`/ramda/lists/insert`}>insert</Link>
          <Link to={`/ramda/lists/insertAll`}>insertAll</Link>
          <Link to={`/ramda/lists/intersection`}>intersection</Link>
          <Link to={`/ramda/lists/last`}>last</Link>
          <Link to={`/ramda/lists/lastIndexOf`}>lastIndexOf</Link>
          <Link to={`/ramda/lists/length`}>length</Link>
          <Link to={`/ramda/lists/map`}>map</Link>
          <Link to={`/ramda/lists/mean`}>mean</Link>
          <Link to={`/ramda/lists/median`}>median</Link>
          <Link to={`/ramda/lists/none`}>none</Link>
          <Link to={`/ramda/lists/nth`}>nth</Link>
          <Link to={`/ramda/lists/pair`}>pair</Link>
          <Link to={`/ramda/lists/pluck`}>pluck</Link>
          <Link to={`/ramda/lists/prepend`}>prepend</Link>
          <Link to={`/ramda/lists/product`}>product</Link>
          <Link to={`/ramda/lists/range`}>range</Link>
          <Link to={`/ramda/lists/reduce`}>reduce</Link>
          <Link to={`/ramda/lists/reject`}>reject</Link>
          <Link to={`/ramda/lists/remove`}>remove</Link>
          <Link to={`/ramda/lists/reverse`}>reverse</Link>
          <Link to={`/ramda/lists/scan`}>scan</Link>
          <Link to={`/ramda/lists/slice`}>slice</Link>
          <Link to={`/ramda/lists/sort`}>sort / sortBy / sortWith</Link>
          <Link to={`/ramda/lists/split`}>split / splitAt / splitEvery / splitWhen</Link>
          <Link to={`/ramda/lists/sum`}>sum</Link>
          <Link to={`/ramda/lists/take`}>take</Link>
          <Link to={`/ramda/lists/takeLast`}>takeLast</Link>
          <Link to={`/ramda/lists/takeLastWhile`}>takeLastWhile</Link>
          <Link to={`/ramda/lists/takeWhile`}>takeWhile</Link>
          <Link to={`/ramda/lists/transduce`}>transduce</Link>
          <Link to={`/ramda/lists/union`}>union</Link>
          <Link to={`/ramda/lists/unionWith`}>unionWith</Link>
          <Link to={`/ramda/lists/divide`}>divide</Link>
          <Link to={`/ramda/lists/uniqWith`}>uniqWith</Link>
          <Link to={`/ramda/lists/update`}>update</Link>
          <Link to={`/ramda/lists/without`}>without</Link>
          <Link to={`/ramda/lists/zip`}>zip / zipObj / zipWith</Link>
        </div>
        <Switch>
          <Route path="/ramda/lists/addIndex" component={AddIndex} />
          <Route path="/ramda/lists/adjust" component={Adjust} />
          <Route path="/ramda/lists/all" component={All} />
          <Route path="/ramda/lists/any" component={Any} />
          <Route path="/ramda/lists/append" component={Append} />
          <Route path="/ramda/lists/chain" component={Chain} />
          <Route path="/ramda/lists/concat" component={Concat} />
          <Route path="/ramda/lists/contains" component={Contains} />
          <Route path="/ramda/lists/difference" component={Difference} />
          <Route path="/ramda/lists/drop" component={Drop} />
          <Route path="/ramda/lists/filter" component={Median} />
          <Route path="/ramda/lists/find" component={Find} />
          <Route path="/ramda/lists/findIndex" component={FindIndex} />
          <Route path="/ramda/lists/findLast" component={FindLast} />
          <Route path="/ramda/lists/findLastIndex" component={FindLastIndex} />
          <Route path="/ramda/lists/fromPairs" component={FromPairs} />
          <Route path="/ramda/lists/groupBy" component={GroupBy} />
          <Route path="/ramda/lists/head" component={Head} />
          <Route path="/ramda/lists/indexBy" component={IndexBy} />
          <Route path="/ramda/lists/indexOf" component={IndexOf} />
          <Route path="/ramda/lists/init" component={Init} />
          <Route path="/ramda/lists/insert" component={Insert} />
          <Route path="/ramda/lists/insertAll" component={InsertAll} />
          <Route path="/ramda/lists/intersection" component={Intersection} />
          <Route path="/ramda/lists/last" component={Last} />
          <Route path="/ramda/lists/lastIndexOf" component={LastIndexOf} />
          <Route path="/ramda/lists/length" component={Length} />
          <Route path="/ramda/lists/mapx" component={MapX} />
          <Route path="/ramda/lists/mean" component={Mean} />
          <Route path="/ramda/lists/median" component={Median} />
          <Route path="/ramda/lists/none" component={None} />
          <Route path="/ramda/lists/nth" component={Nth} />
          <Route path="/ramda/lists/pair" component={Pair} />
          <Route path="/ramda/lists/pluck" component={Pluck} />
          <Route path="/ramda/lists/prepend" component={Prepend} />
          <Route path="/ramda/lists/product" component={Product} />
          <Route path="/ramda/lists/range" component={Range} />
          <Route path="/ramda/lists/reduce" component={Reduce} />
          <Route path="/ramda/lists/reject" component={Reject} />
          <Route path="/ramda/lists/remove" component={Remove} />
          <Route path="/ramda/lists/reverse" component={Reverse} />
          <Route path="/ramda/lists/scan" component={Scan} />
          <Route path="/ramda/lists/slice" component={Slice} />
          <Route path="/ramda/lists/sort" component={Sort} />
          <Route path="/ramda/lists/split" component={Split} />
          <Route path="/ramda/lists/sum" component={Sum} />
          <Route path="/ramda/lists/take" component={Take} />
          <Route path="/ramda/lists/takeLast" component={TakeLast} />
          <Route path="/ramda/lists/takeLastWhile" component={TakeLastWhile} />
          <Route path="/ramda/lists/takeWhile" component={TakeWhile} />
          <Route path="/ramda/lists/transduce" component={Transduce} />
          <Route path="/ramda/lists/union" component={Union} />
          <Route path="/ramda/lists/unionWith" component={UnionWith} />
          <Route path="/ramda/lists/divide" component={Uniq} />
          <Route path="/ramda/lists/uniqWith" component={UniqWith} />
          <Route path="/ramda/lists/update" component={Update} />
          <Route path="/ramda/lists/without" component={Without} />
          <Route path="/ramda/lists/zip" component={Zip} />
        </Switch>
      </div>
    );
  }
}
