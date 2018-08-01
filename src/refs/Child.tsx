import React from 'react';
import { style } from 'ui/StringInput';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Child extends React.PureComponent<Props, State> {
  refInput: any = React.createRef();

  focusInputBase = () => {
    this.refInput &&
      this.refInput.current &&
        this.refInput.current.focus &&
          this.refInput.current.focus();
  }
  selectInputBase = () => {
    this.refInput &&
      this.refInput.current &&
        this.refInput.current.select &&
          this.refInput.current.select();
  }

  render() {
    return (
      <input style={style.input} type="text" ref={this.refInput} />
    );
  }
}
export default Child;
