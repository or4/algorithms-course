
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


// export async function addProjectInfo(worklogs: DataType): Promise<DataType> {
//   const result = R.pipeP(
//     async w => R.toPairs(w),
//     async w => Promise.all(R.map(async ([key, value]) => [key, value * await timeout()], w)),
//     async w => R.fromPairs(w),
//   )({ a: 123, b: 444, c: 555 });

//   console.log('result', await result);

//   return worklogs;
// }

  // return Promise.all(
  //   R.map(
  //     async ([projectKey, projectValue]) => [projectKey, await getProjectWithInfo(projectKey, projectValue)],
  //     R.toPairs(worklogs)
  //   )
  // ).then(R.fromPairs);
}
