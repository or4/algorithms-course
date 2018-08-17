import React from 'react';

type Props = {
};
type State = {
};

export class Gradients extends React.PureComponent<Props, State> {
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
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="50" fill={`url(#linear-gradient)`} />
          </svg>

          <h5>radialGradient</h5>
          <svg width="100" height="100">
            <defs>
              <radialGradient id="radial-gradient" xlinkHref="#linear-gradient" />
            </defs>
            <circle cx="50" cy="50" r="50" fill={`url(#radial-gradient)`} />
          </svg>
        </div>
        <div>
          <h5>stroke with gradient</h5>
          <svg width="100" height="100">
            <rect x="0" y="0" height="100" width="100" stroke="url(#linear-gradient)" strokeWidth="10" fill="rgb(55,155,155)" />
          </svg>
        </div>
      </div>
    );
  }
}
