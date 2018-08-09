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
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Not</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Or</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>And</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Complement</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Either</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Both</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>AnyPass</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>AllPass</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>Empty</Link>
          <Link style={rawStyle.link} to={`/ramda/logic/ifelse`}>IsEmpty</Link>
        </div>
        <Switch>
          <Route path="/ramda/logic/ifelse" component={IfElse} />
          <Route path="/ramda/logic/ifelse" component={Not} />
          <Route path="/ramda/logic/ifelse" component={Or} />
          <Route path="/ramda/logic/ifelse" component={And} />
          <Route path="/ramda/logic/ifelse" component={Complement} />
          <Route path="/ramda/logic/ifelse" component={Either} />
          <Route path="/ramda/logic/ifelse" component={Both} />
          <Route path="/ramda/logic/ifelse" component={AnyPass} />
          <Route path="/ramda/logic/ifelse" component={AllPass} />
          <Route path="/ramda/logic/ifelse" component={Empty} />
          <Route path="/ramda/logic/ifelse" component={IsEmpty} />
        </Switch>
      </div>
    );
  }
}
