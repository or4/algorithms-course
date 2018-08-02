import React from 'react';

export const style = {
  row: {
    marginTop: '20px',
  },
  input: {
    fontSize: '12px',
    height: '150px',
    lineHeight: '20px',
    marginTop: '8px',
    width: '750px',
  }
};

type Props = {
  caption?: string;
  onChange?: (value: string) => void;
  style?: any;
  value: string;
};
type State = {
};
type Event = {
  target: {
    value: string;
  };
};

export class Textarea extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    style: {},
  }

  onChange = ({ target }: Event) => {
    const { value } = target;
    this.props.onChange && this.props.onChange(value);
  }
  render() {
    const { caption, value, style: styleProps } = this.props;

    return (
      <div style={style.row}>
        {caption ? <div>{caption}</div> : null}
        <textarea style={Object.assign({}, style.input, styleProps)} onChange={this.onChange} value={value} />
      </div>
    );
  }
}