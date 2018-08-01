import React from 'react';
import Child from './Child';
import { Button } from 'ui/Button';

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
          <Button style={{ height: '21px' }} onClick={this.selectChildInput}>Focus</Button>
          &nbsp;
          <Child ref={this.refInput} />
        </div>
      </div>
    );
  }
}
