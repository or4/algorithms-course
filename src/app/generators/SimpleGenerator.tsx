import React from 'react';


type Props = {};
type State = {
  fontSize: number;
};

const arr = [1, 2, 3, 4, 5];

function* getGenerator() {
  while (arr.length > 0) {
    yield arr.pop();
  }
}

export class SimpleGenerator extends React.Component<Props, State> {
  render() {
    const generator = getGenerator();

    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);

    return (
      <div>
        <h3>Simple SimpleGenerator 1</h3>
      </div>
    );
  }
}
