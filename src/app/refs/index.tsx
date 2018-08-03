import React from 'react';
import Child from './Child';
import { Button } from 'app/ui/Button';

type Props = {
};
type State = {
};

export class Refs extends React.PureComponent<Props, State> {
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
        <h3>Ref with child</h3>
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <Button style={{ height: '21px' }} onClick={this.selectChildInput}>Focus</Button>
          &nbsp;
          <Child ref={this.refInput} />
        </div>
      </div>
    );
  }
}
