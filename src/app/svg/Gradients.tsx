import React from 'react';
import * as R from 'ramda';
import Hamburger from './assets/Hamburger.svg';
import drawing from './assets/drawing.svg';
import copy from './assets/copy.svg';

type Props = {
};
type State = {
};

export class Gradients extends React.PureComponent<Props, State> {


// <div>
//   <svg width="200px" height="200px" id="complexSvg">
//     <path d="M29 105h101S93 25 180 0v167s-76-44-103 9-77 18-77 18z" stroke="white" />
//   </svg>
// </div>
  render() {
    return (
      <div>
        <h3>Gradients</h3>
        <a href="http://css.yoksel.ru/svg-gradients/"><h5>http://css.yoksel.ru/svg-gradients/</h5></a>


        <svg width="1" height="1">
          <defs>
            <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="5%" stopColor="green" />
              <stop offset=".25" stopColor="blue" stopOpacity=".5" />
              <stop offset="95%" stopColor="gold" />
            </linearGradient>
          </defs>
        </svg>>

        <div>
          <h5>linearGradient</h5>
          <svg width="100" height="200">
            <circle cx="50" cy="50" r="50" fill={`url(#linear-gradient)`} />
          </svg>

          <h5>radialGradient</h5>
          <svg width="100" height="200">
            <defs>
              <radialGradient id="radial-gradient" xlinkHref="#linear-gradient" />
            </defs>
            <circle cx="50" cy="50" r="50" fill={`url(#radial-gradient)`} />
          </svg>
        </div>
      </div>
    );
  }
}
