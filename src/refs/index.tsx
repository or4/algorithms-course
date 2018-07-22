import React from 'react';
import Child from './Child';

type Props = {
};
type State = {
};

export class RefsWithChild extends React.PureComponent<Props, State> {
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
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <button style={{ height: '21px' }} type="button" onClick={this.selectChildInput}>Focus</button>
          &nbsp;
          <Child ref={this.refInput} />
        </div>
      </div>
    );
  }
}
