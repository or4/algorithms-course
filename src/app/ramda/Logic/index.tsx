import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { IfElse } from './IfElse';
import { Not } from './Not';
import { Or } from './Or';
import { And } from './And';
import { Complement } from './Complement';
import { Either } from './Either';
import { Both } from './Both';
import { AnyPass } from './AnyPass';
import { AllPass } from './AllPass';
import { Empty } from './Empty';
import { IsEmpty } from './IsEmpty';

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

export class Logic extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>IfElse</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/not`}>Not</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/or`}>Or</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/and`}>And</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/complement`}>Complement</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/either`}>Either</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/both`}>Both</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/anypass`}>AnyPass</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/allpass`}>AllPass</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/empty`}>Empty</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/isempty`}>IsEmpty</Link>
        </div>
        <Switch>
          <Route path="/ramda/logic/ifelse" component={IfElse} />
          <Route path="/ramda/logic/not" component={Not} />
          <Route path="/ramda/logic/or" component={Or} />
          <Route path="/ramda/logic/and" component={And} />
          <Route path="/ramda/logic/complement" component={Complement} />
          <Route path="/ramda/logic/either" component={Either} />
          <Route path="/ramda/logic/both" component={Both} />
          <Route path="/ramda/logic/anypass" component={AnyPass} />
          <Route path="/ramda/logic/allpass" component={AllPass} />
          <Route path="/ramda/logic/empty" component={Empty} />
          <Route path="/ramda/logic/isempty" component={IsEmpty} />
        </Switch>
      </div>
    );
  }
}
