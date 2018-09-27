import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Once extends React.PureComponent<Props, State> {
  render() {

    const timeout = async () => new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });

    async function test(): Promise<any> {
      const result = R.pipeP(
        async (w: any) => R.toPairs(w),
        async (w: any) => Promise.all(R.map(async ([key, value]) => [key, value * await timeout()], w)),
        async (w: any) => R.fromPairs(w),
      )({ a: 123, b: 444, c: 555 });

      console.log('result', await result);
    }

    return (
      <div>
        <h3>R.pipeP</h3>
      </div>
    );
  }
}

// return Promise.all(
//   R.map(
//     async ([projectKey, projectValue]) => [projectKey, await getProjectWithInfo(projectKey, projectValue)],
//     R.toPairs(worklogs)
//   )
// ).then(R.fromPairs);

// // return R.pipeP(
// //  // async w => R.toPairs(w),
// //   w => Promise.resolve(R.toPairs(w)),
// //   w => Promise.all(R.map(
// //     async ([projectKey, projectValue]) => [projectKey, await getProjectWithInfo(projectKey, projectValue)],
// //     w
// //   )),
// //   R.fromPairs
// // )(worklogs);

// return Promise.all(
//   R.map(
//     async ([projectKey, projectValue]) => [projectKey, await getProjectWithInfo(projectKey, projectValue)],
//     R.toPairs(worklogs)
//   )
// ).then(R.fromPairs);

