import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  select: {
    background: 'rgba(0,0,0,0.1)',
    fontSize: '14px',
    minHeight: '24px',
    width: '250px',
  }
};

const sheet = jss.createStyleSheet(rawClasses).attach();
const { classes } = sheet;

type Props = {
  className?: string;
  onChange?: any;
  onClick?: () => void;
  style?: any;
  value?: any;
};
type State = {};

export class Select extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    className: '',
    style: {},
  }

  onChange = ({ target } : any) => {
    this.props.onChange && this.props.onChange(target.value);
  }

  render() {
    const { className, children, onChange, style, ...rest } = this.props;

    return (
      <select
        className={[classes.select, className].join(' ')}
        onChange={this.onChange}
        style={style}
        {...rest}
      >
        {children}
      </select>
    );
  }
}
