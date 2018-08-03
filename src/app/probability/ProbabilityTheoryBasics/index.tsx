import React from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'block' as 'block',

    '& > img': {
      display: 'block' as 'block',
      margin: '20px 0',
    }
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

//<div className={classes.container}>

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

export class ProbabilityTheoryBasics extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <div className={classes.container}>
        <h3>Probability Theory Basics</h3>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
      </div>
    );
  }
}
