import React from 'react';
import { NeuralNetwork } from './network/NeuralNetwork';

let obj = new NeuralNetwork();
obj.start();

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

export class BitwiseAnd extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <div>
        <h3>
          Bitwise And
        </h3>

      </div>
    );
  }
}
