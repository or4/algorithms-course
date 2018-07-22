import React from 'react';

type Props = {
};
type State = {
  started: boolean;
};
export class AnimateSimple extends React.PureComponent<Props, State> {
  state = {
    started: false
  };
  componentDidMount() {
    const c = document.getElementById('AnimateSimple');
    let currentAnimationTime = 0;
    const center = 175;
    const effort = 100;
    const growth = 2 * Math.PI / 60;

    animate();

    function animate() {
      if (!c) { return }

      c.setAttribute('cy', String(center + effort * (Math.sin(currentAnimationTime))));
      c.setAttribute('cx', String(center + effort * (Math.cos(currentAnimationTime))));

      currentAnimationTime += growth;
      requestAnimationFrame(animate);
    }
  }
  // style="min-width: 2000px; min-height: 1200px;"
  render() {
    return (
      <div>
        <svg width="2000" height="1200">
          <circle id="AnimateSimple" cx="150" cy="75" r="10" />
        </svg>
      </div>
    );
  }
}
