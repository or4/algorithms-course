import * as R from 'ramda';

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

const timeout = async () => new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

export async function addProjectInfo(): Promise<*> {
  const result = R.pipeP(
    async w => R.toPairs(w),
    async w => Promise.all(R.map(async ([key, value]) => [key, value * await timeout()], w)),
    async w => R.fromPairs(w),
  )({ a: 123, b: 444, c: 555 });

  console.log('result', await result);
}

  // return Promise.all(
  //   R.map(
  //     async ([projectKey, projectValue]) => [projectKey, await getProjectWithInfo(projectKey, projectValue)],
  //     R.toPairs(worklogs)
  //   )
  // ).then(R.fromPairs);
}
