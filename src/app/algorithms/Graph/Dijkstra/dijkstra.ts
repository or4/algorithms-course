import * as R from 'ramda';
import { convertToArray } from './utils';
import { objToString } from '../../../ramda/helpers';

export const runDijkstra = (raw: string, vertice: number) => {
  const graph = convertToArray(raw);
  // console.log('graph', R.pipe(R.toPairs, R.map(R.map(objToString)), R.fromPairs)(graph));
  console.log('graph', graph);

  const node = graph[vertice];
  console.log('node', objToString(node));

};