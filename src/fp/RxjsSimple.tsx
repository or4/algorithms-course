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
};

export class RxjsSimple extends React.Component<Props, State> {
  state = {
  };

  componentDidMount() {

    const logExample = timer(3000, 1000);
    logExample.subscribe((x: any) => {
      console.log(x);
    });

    const logExample2 = timer(3000, 1000);
    logExample2.subscribe(console.log);



    const source$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const onlyEvens = filter((x: number) => x % 2 > 0);
    const doubleNumbers = map((x: number) => x * 2);
    const sum = reduce((acc, next) => acc + next, 0);

    source$.pipe(
      onlyEvens,
      doubleNumbers,
      sum
    )
      .subscribe(console.log); // log 50


  }

  render() {
    return (<div>Test</div>);
  }
}
