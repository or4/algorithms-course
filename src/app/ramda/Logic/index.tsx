import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { AllPass } from './AllPass';
import { And } from './And';
import { AnyPass } from './AnyPass';
import { Both } from './Both';
import { Complement } from './Complement';
import { Either } from './Either';
import { Empty } from './Empty';
import { IfElse } from './IfElse';
import { IsEmpty } from './IsEmpty';
import { Not } from './Not';
import { Or } from './Or';

type Props = {
};
type State = {
};

export class Logic extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/ramda/logic/allpass`}>allPass</Link>
          <Link to={`/ramda/logic/and`}>and</Link>
          <Link to={`/ramda/logic/anypass`}>anyPass</Link>
          <Link to={`/ramda/logic/both`}>both</Link>
          <Link to={`/ramda/logic/complement`}>complement</Link>
          <Link to={`/ramda/logic/either`}>either</Link>
          <Link to={`/ramda/logic/empty`}>empty</Link>
          <Link to={`/ramda/logic/ifelse`}>ifElse</Link>
          <Link to={`/ramda/logic/isempty`}>isEmpty</Link>
          <Link to={`/ramda/logic/not`}>not</Link>
          <Link to={`/ramda/logic/or`}>or</Link>
        </div>
        <Switch>
          <Route path="/ramda/logic/allpass" component={AllPass} />
          <Route path="/ramda/logic/and" component={And} />
          <Route path="/ramda/logic/anypass" component={AnyPass} />
          <Route path="/ramda/logic/both" component={Both} />
          <Route path="/ramda/logic/complement" component={Complement} />
          <Route path="/ramda/logic/either" component={Either} />
          <Route path="/ramda/logic/empty" component={Empty} />
          <Route path="/ramda/logic/ifelse" component={IfElse} />
          <Route path="/ramda/logic/isempty" component={IsEmpty} />
          <Route path="/ramda/logic/not" component={Not} />
          <Route path="/ramda/logic/or" component={Or} />
        </Switch>
      </div>
    );
  }
}
