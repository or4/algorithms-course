import React from 'react';

type Props = {
};
type State = {
};

export class Masks extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Masks</h3>
        <h5>there are many different mask exaples <a href="http://css.yoksel.ru/svg-masks/">http://css.yoksel.ru/svg-masks/</a></h5>
        <h5>this chapter not done now</h5>
        <svg width="100" height="100">
          <defs>
            <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="5%" stopColor="green" />
              <stop offset=".25" stopColor="blue" stopOpacity=".5" />
              <stop offset="95%" stopColor="gold" />
            </linearGradient>
            <mask id="mask">
              <g strokeWidth="12" fill="white">
                <circle cx="33%" cy="30%" r="20%" />
              </g>
            </mask>
          </defs>

          <circle cx="100" cy="100" r="50" fill={`#linear-gradient)`} />
          <rect x="0" y="0" height="100" width="100" mask="url(#mask)" fill="blue" />
        </svg>
      </div>

    );
  }
}
