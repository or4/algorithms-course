import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class PropEq extends React.PureComponent<Props, State> {
  render() {
    let abby = { name: 'Abby', age: 7, hair: 'blond' };
    let fred = { name: 'Fred', age: 12, hair: 'brown' };
    let rusty = { name: 'Rusty', age: 10, hair: 'brown' };
    let alois = { name: 'Alois', age: 15, disposition: 'surly' };
    let kids = [abby, fred, rusty, alois];
    let hasBrownHair = R.propEq('hair', 'brown');
    R.filter(hasBrownHair, kids); //=> [fred, rusty]
    return (
      <div>
        <h3>R.propEq</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
      </div>
    );
  }
}
