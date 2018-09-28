import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: 'green',
    display: 'flex',
    flexDirection: 'row' as 'row',
    height: '100px',
    width: '450px'
  },
  col1: {
    background: 'blue',
    flexShrink: '0' as any,
    width: '200px',
  },
  col2: {
    background: 'yellow',
    width: '200px'
  },
  col3: {
    background: 'orange',
    flexShrink: '0' as any,
    width: '200px',
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class Column32 extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Columns 3</h3>
        <div className={classes.container}>
          <div className={classes.col1}>&nbsp;</div>
          <div className={classes.col2}>&nbsp;</div>
          <div className={classes.col3}>&nbsp;</div>
        </div>
      </div>
    );
  }
}
