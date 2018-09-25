
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