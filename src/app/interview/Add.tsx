import React from 'react';

type Props = {
};
type State = {
};

const add = function(arg1: number) {
  let sum = arg1;
  const func = function(arg2: number) {
    sum += arg2;
    return func;
  };
  func.valueOf = () => sum;
  return func;
};

export class Add extends React.PureComponent<Props, State> {

  render() {

    return (
      <div>
        <h3>Add</h3>
        <div>{Number(add(1)(2)(45)(5))}</div>
      </div>
    );
  }
}
