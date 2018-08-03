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

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Animate extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/animate/raf`}>Simple rAF</Link>
          <Link style={rawStyle.link} to={`/animate/keyframe`}>keyframe</Link>
          <Link style={rawStyle.link} to={`/animate/transition-group`}>ReactCSSTransitionGroup</Link>
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
