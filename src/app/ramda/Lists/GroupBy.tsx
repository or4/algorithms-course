import React from 'react';
import * as R from 'ramda';
import { objToString } from '../helpers';

type Props = {
};
type State = {
};

export class GroupBy extends React.PureComponent<Props, State> {
  render() {
    const byGrade = R.groupBy(({ score }: any) => (score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'));
    const students = [{ name: 'Abby', score: 84 }, { name: 'Eddy', score: 58 }, { name: 'Jack', score: 69 }];

    return (
      <div>
        <h3>R.groupBy</h3>
        <div>{`const byGrade = R.groupBy(({ score }: any) => (score < 65 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'));`}</div>
        <div>{`const students = [{ name: 'Abby', score: 84 }, { name: 'Eddy', score: 58 }, { name: 'Jack', score: 69 }];`}</div>
        <div>{`byGrade(students) = ${objToString(byGrade(students))}`}</div>

        <h3>R.groupWith</h3>
        <div>{`R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]) = ${objToString(R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]))}`}</div>
        <div>{`R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21]) = ${objToString(R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21]))}`}</div>
        <div>{`R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]) = ${objToString(R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]))}`}</div>
      </div>
    );
  }
}
