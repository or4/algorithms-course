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

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  style?: any;
  text?: string;
  onClick: () => void;
};
type State = {};

export class Button extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }

  render() {
    const { className, children, style, text, ...rest } = this.props;

    return (
      <button
        className={[classes.button, className].join(' ')}
        style={style}
        {...rest}
      >
        {text || children}
      </button>
    );
  }
}
