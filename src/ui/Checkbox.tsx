import React from 'react';

type Props = {
  labelStyle?: any;
  inputStyle?: any;
  text?: string;
  onChange?: (value: boolean) => void;
  checked: boolean;
};
type State = {};

export class Checkbox extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    labelStyle: {},
    inputStyle: {},
    text: '',
    checked: false,
  }

  onChange = ({ target } : any) => {
    this.props.onChange && this.props.onChange(target.checked);
  }


  render() {
    const { labelStyle, inputStyle, text, checked } = this.props;

    return (
      <label style={labelStyle}>
        {text}
        <input style={inputStyle} type="checkbox" onChange={this.onChange} checked={checked} />
      </label>
    );
  }
}
