import React from 'react';

type Props = {
};
type State = {
  count: number;
  callbackCalled: number;
};
class KentDoddsEx1 extends React.PureComponent<Props, State> {
  state = {
    count: 0,
    callbackCalled: 0,
  };
  callback = () => {
    this.setState((currentState) => ({
      callbackCalled: currentState.callbackCalled + 1
    }));

    console.log('callback called');
  }
  onClick = () => {
    this.incrementState();
    this.incrementState();
    this.incrementState();
  }
  incrementState = () => {
    this.setState((currentState, currentProps) => {
      return { count: currentState.count + 1 };
    }, this.callback);
  }
  render() {
    return (
      <button onClick={this.onClick}>
        Button Clicked {this.state.count}, Callback called {this.state.callbackCalled}
      </button>
    );
  }
}
export default KentDoddsEx1;
