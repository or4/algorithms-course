import React from 'react';
import * as R from 'ramda';
import Hamburger from './assets/Hamburger.svg';
import drawing from './assets/drawing.svg';
import copy from './assets/copy.svg';

type Props = {
};
type State = {
};

export class Masks extends React.PureComponent<Props, State> {


// <div>
//   <svg width="200px" height="200px" id="complexSvg">
//     <path d="M29 105h101S93 25 180 0v167s-76-44-103 9-77 18-77 18z" stroke="white" />
//   </svg>
// </div>
  render() {
    return (
      <div>
        <div>
          <svg width="200" height="200">
            <defs>
              <mask id="mask">
                <g strokeWidth="12" fill="white">
                  <circle cx="33%" cy="30%" r="20%" />
                </g>
              </mask>
            </defs>

            <circle cx="100" cy="100" r="50" fill={`url(${drawing}#gradient)`} />

            <rect x="0" y="0" height="100" width="100" mask="url(#mask)" fill="blue" />
          </svg>
        </div>



      </div>
    );
  }
}
