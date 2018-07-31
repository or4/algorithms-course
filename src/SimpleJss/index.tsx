import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  button: {
    background: 'rgba(0,0,0,0.1)',
    fontSize: '14px',
    minHeight: '24px',
    width: '250px',

    '&:hover': {
      background: 'rgba(0,0,0,0.15)',
    }
  }
};

const sheet = jss.createStyleSheet(rawClasses, { link: true }).attach();
const { classes } = sheet;

type Props = {};
type State = {
  fontSize: number;
};

export class SimpleJss extends React.Component<Props, State> {
  state = {
    fontSize: 12,
  };

  onClick = () => {
    this.setState({ fontSize: this.state.fontSize + 1 });
  }

  render() {
    sheet.getRule('button').prop('fontSize', this.state.fontSize);

    return (
      <div>
        <h3>Simple Jss With Props</h3>
        <button onClick={this.onClick} className={classes.button}>Styled Button</button>
      </div>
    );
  }
}
