import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { AnimateSimple } from './RAF';
import { Keyframe } from './Keyframe';
import { TransitionGroup } from './TransitionGroup';

type Props = {
};
type State = {
};

export class Animate extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/animate/raf`}>Simple rAF</Link>
          <Link to={`/animate/keyframe`}>keyframe</Link>
          <Link to={`/animate/transition-group`}>ReactCSSTransitionGroup</Link>
        </div>
        <Switch>
          <Route path="/animate/raf" component={AnimateSimple} />
          <Route path="/animate/keyframe" component={Keyframe} />
          <Route path="/animate/transition-group" component={TransitionGroup} />
        </Switch>
      </div>
    );
  }
}
