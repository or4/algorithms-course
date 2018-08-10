import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class AllPass extends React.PureComponent<Props, State> {
  render() {
    const isQueen = R.propEq('rank', 'Q');
    const isSpade = R.propEq('suit', '♠︎');
    const isQueenOfSpades = R.allPass([isQueen, isSpade, () => true]);

    return (
      <div>
        <h3>AllPass</h3>
        <h5>Unlike R.both, R.allpass can provide more than two args</h5>
        <div>const isQueen = R.propEq('rank', 'Q');</div>
        <div>const isSpade = R.propEq('suit', '♠︎');</div>
        <div>const isQueenOfSpades = R.allPass([isQueen, isSpade, () => true]);</div>
        <div>&nbsp;</div>
        <div>{`isQueenOfSpades({rank: 'Q', suit: '♣︎'}) = ${isQueenOfSpades({ rank: 'Q', suit: '♣︎' })}`}</div>
        <div>{`isQueenOfSpades({rank: 'Q', suit: '♠︎'}) = ${isQueenOfSpades({ rank: 'Q', suit: '♠︎' })}`}</div>
      </div>
    );
  }
}
