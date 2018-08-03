import React from 'react';
import { Textarea } from 'app/ui/Textarea';
import { esprimaInstance } from './esprima';
import { Button } from 'app/ui/Button';

const rawStyle = {
  textarea: {
    height: '400px'
  }
};
type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
  code: string;
  output: string;
};

const defCode =
`const bubbleSort = (arr) => {
  debugger;
     const sorted = [...arr];
     let counterSwap = 0;
  let counterCycles = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sorted[i] > sorted[j]) {
        const tmp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = tmp;
        counterSwap++;
      }
      counterCycles++;
    }
  }

  console.log('arr.length', arr.length);
  console.log('counterSwap', counterSwap);
  console.log('counterCycles', counterCycles);

  return sorted;
};`;

export class Esprima extends React.Component<Props, State> {
  state = {
    code: defCode,
    output: esprimaInstance.clean(defCode),
  };

  onCodeChange = (code: string) => {
    this.setState({ code });
  }

  onSubmit = () => {
    this.setState({
      output: esprimaInstance.clean(this.state.code)
    });
  }

  render() {
    const { code, output } = this.state;
    return (
      <div>
        <h3>Code cleaner by esprima & falafel</h3>
        <Textarea onChange={this.onCodeChange} style={rawStyle.textarea} value={code} />
        <Button text={'Analyze'} onClick={this.onSubmit} />
        <div>
          <Textarea caption={'Output:'} style={rawStyle.textarea} value={output} />
        </div>
      </div>
    );
  }
}
