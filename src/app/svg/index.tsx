import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Add } from './Add';
import { Animate } from './Animate';
import { AnimateMotion } from './AnimateMotion';
import { Filters } from './Filters';
import { Gradients } from './Gradients';
import { Gsap } from './Gsap';
import { Masks } from './Masks';

type Props = {
};
type State = {
};

export class Svg extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/svg/add`}>add</Link>
          <Link to={`/svg/animate`}>animate</Link>
          <Link to={`/svg/animateMotion`}>animateMotion</Link>
          <Link to={`/svg/filters`}>filters</Link>
          <Link to={`/svg/gradients`}>gradients</Link>
          <Link to={`/svg/gsap`}>gsap</Link>
          <Link to={`/svg/masks`}>masks</Link>

        </div>

        <Switch>
          <Route path="/svg/add" component={Add} />
          <Route path="/svg/animate" component={Animate} />
          <Route path="/svg/animateMotion" component={AnimateMotion} />
          <Route path="/svg/filters" component={Filters} />
          <Route path="/svg/gradients" component={Gradients} />
          <Route path="/svg/gsap" component={Gsap} />
          <Route path="/svg/masks" component={Masks} />

        </Switch>
      </div>
    );
  }
}
