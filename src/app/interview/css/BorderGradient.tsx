import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    backgroundColor: 'green',
    // height: '36px',
    padding: '10px',
    width: '400px',
    border: '5px solid transparent',
    background: 'linear-gradient(#FFF, #FFF) padding-box, repeating-linear-gradient(135deg, teal, teal 5px, white 5px, white 10px) border-box',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class BorderGradient extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>BorderGradient or repeating-linear-gradient</h3>
        <div className={classes.container}>
          Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?
        </div>
      </div>
    );
  }
}
