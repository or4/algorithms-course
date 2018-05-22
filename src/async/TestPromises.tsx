
import React from 'react';

function test(): Promise<number> {
  const promise = new Promise<number>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(123);
      }, 4000);
    } catch (error) {
      reject(new Error('Cannot save to local storage'));
    }
  });

  return promise;
}

async function getCode(): Promise<number> {
  return test();
}


type Props = {
};
type State = {
  started: boolean;
  value: number;
};
class TestPromises extends React.PureComponent<Props, State> {
  state = {
    started: false,
    value: 0,
  }
  async componentDidMount() {
    const result = await getCode();
    this.setState({ started: true, value: result });
  }
  render() {
    return (
      <div>
        {this.state.started ? `done! ${this.state.value}` : 'wait...'}
      </div>
    );
  }
}
export default TestPromises;

