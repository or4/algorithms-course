import React from 'react';
import Child from './Child';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class Parent extends React.PureComponent<Props, State> {
  refInput: any = React.createRef();

  selectChildInput = () => {
    if (this.refInput && this.refInput.current && this.refInput.current.focusInputBase) {
      this.refInput.current.focusInputBase();
      this.refInput.current.selectInputBase();
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.selectChildInput}>Focus</button>
          &nbsp;
          <Child ref={this.refInput} />
        </div>
      </div>
    );
  }
}
export default Parent;
