import { List } from 'immutable';
import { Graph, VerticeNode } from './utils';
import * as R from 'ramda';
import { isNotNil, objToString } from '../../../ramda/helpers';

type ItemResult = {
  vertice: number;
  length: number;
};

const resetSearchVerticeVisited = R.pipe(
  R.toPairs,
  R.map((item: any) => [item[0], R.assoc('svVisited', false, item[1])]),
  R.fromPairs
);

const sort = R.pipe<VerticeNode[], VerticeNode[]>(R.sortWith([
  R.ascend(R.prop('weight'))
]));

const getMinVertice = (graph: Graph, vertice: number): ItemResult => {
  // if (graph[vertice].svVisited) {
  //   return -1;
  // }
  // graph[vertice].svVisited = true;

  // if (!graph[vertice].done) {
  //   return vertice;
  // }

  // const edges = sort(graph[vertice].edges);

  // for (let i = 0; i < edges.length; i++) {
  //   const res = getMinVertice(graph, edges[i].vertice);
  //   if (res >= 0) {
  //     return res;
  //   }
  // }

  return { vertice: -1, length: -1 };
};


export const getMinVerticeDFS = (graph: Graph, startVertice: number = 1): ItemResult => {
  const locGraph = resetSearchVerticeVisited(graph) as any;

  // console.log('locGraph', locGraph);
  return getMinVertice(locGraph, startVertice);
};
