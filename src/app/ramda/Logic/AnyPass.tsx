import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class AnyPass extends React.PureComponent<Props, State> {
  render() {
    const isClub = R.propEq('suit', '♣');
    const isSpade = R.propEq('suit', '♠');
    const isBlackCard = R.anyPass([isClub, isSpade]);

    return (
      <div>
        <h3>R.anyPass</h3>
        <div>{`const isClub = R.propEq('suit', '♣');`}</div>
        <div>{`const isSpade = R.propEq('suit', '♠');`}</div>
        <div>{`const isBlackCard = R.anyPass([isClub, isSpade]);`}</div>
        <div>&nbsp;</div>
        <div>{`isBlackCard({ rank: '10', suit: '♣' }) = ${isBlackCard({ rank: '10', suit: '♣' })}`}</div>
        <div>{`isBlackCard({ rank: 'Q', suit: '♠' }) = ${isBlackCard({ rank: 'Q', suit: '♠' })}`}</div>
        <div>{`isBlackCard({ rank: 'Q', suit: '♦' }) = ${isBlackCard({ rank: 'Q', suit: '♦' })}`}</div>
      </div>
    );
  }
}
