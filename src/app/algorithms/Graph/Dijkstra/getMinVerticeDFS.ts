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

  if (R.isNil(graph[vertice])) {
    return { vertice: -1, length: Infinity };
  }

  if (!graph[vertice].done) {
    return { vertice, length: graph[vertice].value };
  }

  const edges = sort(graph[vertice].edges);

  const items = edges.map((item: VerticeNode) => getMinVertice(graph, item.vertice));

  const item = R.pipe(
    R.sortWith([R.descend(R.prop('length'))]),
    R.head
  )(items);


  return item as any as ItemResult;
  // return { vertice: -1, length: Infinity };
};


export const getMinVerticeDFS = (graph: Graph, startVertice: number = 1): ItemResult => {
  const locGraph = resetSearchVerticeVisited(graph) as any;

  // console.log('locGraph', locGraph);
  return getMinVertice(locGraph, startVertice);
};
