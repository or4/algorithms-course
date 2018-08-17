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
        <h3>Relative links</h3>
        <h5>via url(drawing.svg#line)</h5>
        <h5>need make link to svg file in header</h5>

        <div>
          <svg width="200" height="200">
            <circle cx="100" cy="100" r="50" fill={`url(${drawing}#gradient)`} />
          </svg>

          <svg width="100" height="200">
            <circle cx="50" cy="50" r="50" fill={`url(${drawing}#gradient)`} />
          </svg>
        </div>
      </div>
    );
  }
}
