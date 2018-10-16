import React from 'react';

import { timer } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { filter, map, reduce  } from 'rxjs/operators';

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
  data: number[];
  resultTest2: string;
};

export class RxjsSimple extends React.Component<Props, State> {
  state = {
    data: [] as number[],
    resultTest2: ''
  };

  test2InitialData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  componentDidMount() {
    // test 1
    const logExample = timer(3000, 1000);
    logExample.subscribe((x: any) => {
      this.setState({
        data: [...this.state.data, x]
      });
    });

    const logExample2 = timer(3000, 1000);
    logExample2.subscribe(console.log);

    // test 2
    const source$ = from(this.test2InitialData);

    const onlyEvens = filter((x: number) => x % 2 > 0);
    const doubleNumbers = map((x: number) => x * 2);
    const sum = reduce((acc, next) => acc + next, 0);

    source$.pipe(
      onlyEvens,
      doubleNumbers,
      sum
    ).subscribe((result) => {
      this.setState({ resultTest2: String(result) });
    }); // log 50
  }

  render() {
    return (
      <div>
        <h3>
          RxJs Simple
        </h3>

        <h3>
          Simple Counter
        </h3>
        <p style={{ minHeight: '20px' }}>
          {this.state.data.join(', ')}
        </p>

        <h3>
          Filter evens than return sum of double numbers
        </h3>
        <p>
          From: {this.test2InitialData.join(', ')}
        </p>
        <p>
          To: {this.state.resultTest2}
        </p>
      </div>
    );
  }
}
