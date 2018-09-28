import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    background: 'green',
    alignItems: 'center',
    display: 'flex',
    height: '36px',
    width: '400px',
  },
  colText: {
    background: 'orange',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as any,
  },
  colButton: {
    background: 'yellow',
    flexShrink: '0' as any,

    '& > button': {
      height: '20px',
    }
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type Props = {
};
type State = {
};

export class TextOverflowEllipsis extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>text-overflow: ellipsis</h3>
        <div className={classes.container}>
          <div className={classes.colText}>Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?</div>
          <div className={classes.colButton}>
            <button>Submit Submit Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
