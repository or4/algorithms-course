import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
  },
  col1: {
    flex: '1',
    background: 'yellow',
  },
  col2: {
    flex: '2',
    background: 'orange',
  },
};

const { classes } = jss.createStyleSheet(rawClasses as any).attach();

type Props = {
};
type State = {
};

export class FlexGrid extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>FlexGrid</h3>
        <div className={classes.container}>
          <div className={classes.col1}>
            25 %, Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?
          </div>
          <div className={classes.col2}>
            50 %, Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?
          </div>
          <div className={classes.col1}>
            25 %, Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?
          </div>
        </div>
      </div>
    );
  }
}
