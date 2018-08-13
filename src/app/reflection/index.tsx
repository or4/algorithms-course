import React from 'react';

type Props = {
};
type State = {
};

export class Reflection extends React.PureComponent<Props, State> {
  render() {
    const obj = {
      a: 4,
      test: function(b: number, c: number) {
        return this.a + b + c;
      }
    };



    return (
      <div>
        <h3>Idea from ramda/invoker</h3>


        <div>{`const obj = {`}</div>
        <div>{`a: 4,`}</div>
        <div>{`test: function(b: number, c: number) {`}</div>
        <div>{`return this.a + b + c;`}</div>
        <div>{`}`}</div>
        <div>{`}`}</div>

        <div>{`obj.test(1, 2) = ${obj.test(1, 2)}`}</div>
        <div>{`obj['test'](1, 2) = ${obj['test'](1, 2)}`}</div>
        <div>{`obj['test'].apply(obj, [1, 2]) = ${obj['test'](1, 2)}`}</div>
      </div>
    );
  }
}
