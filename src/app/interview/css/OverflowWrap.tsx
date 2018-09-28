import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  container1: {
    background: 'orange',
    height: '300px',
    width: '139px',

    border: '1px solid #000',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    textOverflow: 'ellipsis',
    // overflowWrap: 'break-word',
    // wordWrap: 'break-word', // old syntax
  },
  container2: {
    background: 'orange',
    height: '300px',
    width: '139px',

    border: '1px solid #000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  container3: {
    background: 'orange',
    height: '300px',
    width: '139px',

    border: '1px solid #000',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    wordWrap: 'break-word', // old syntax
  },
};

const { classes } = jss.createStyleSheet(rawClasses as any).attach();

type Props = {
};
type State = {
};

export class OverflowWrap extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>overflow-wrap: normal / break-word</h3>
        <div className={classes.container}>
          <div className={classes.container1}>
          Some text, honorificabilitudinitatibus some another text
          </div>
          <div className={classes.container2}>
          Some text, honorificabilitudinitatibus some another text
          </div>
          <div className={classes.container3}>
          Some text, honorificabilitudinitatibus some another text
          </div>
        </div>
      </div>
    );
  }
}
