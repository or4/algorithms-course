import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class GroupBy extends React.PureComponent<Props, State> {
  render() {
    /*     let byGrade = R.groupBy(function(student) {
      let score = student.score;
      return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
    });
    let students = [{ name: 'Abby', score: 84 },
      { name: 'Eddy', score: 58 },
      // ...
      { name: 'Jack', score: 69 }];
    byGrade(students);
    // {
    //   'A': [{name: 'Dianne', score: 99}],
    //   'B': [{name: 'Abby', score: 84}]
    //   // ...,
    //   'F': [{name: 'Eddy', score: 58}]
    // }



    R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]

    R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]

    R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

    R.groupWith(R.eqBy(isVowel), 'aestiou'); */
    //=> ['ae', 'st', 'iou']
    return (
      <div>
        <h3>R.groupBy</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}
