import React from 'react';

export const style = {
  row: {
    height: '30px',
  },
  input: {
    fontSize: '12px',
    height: '20px',
    lineHeight: '20px',
    marginLeft: '10px',
    width: '750px',
  }
};

type Props = {
  caption: string;
  onChange: (value: string) => void;
  value: string;
};
type State = {
};
type Event = {
  target: {
    value: string;
  };
};

export class StringInput extends React.PureComponent<Props, State> {
  onChange = ({ target }: Event) => {
    const { value } = target;
    this.props.onChange && this.props.onChange(value);
  }
  render() {
    const { caption, value } = this.props;

    return (
      <div style={style.row}>
        {caption}
        <input style={style.input} onChange={this.onChange} type="text" value={value} />
      </div>
    );
  }
}