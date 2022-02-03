import * as R from 'ramda';
import { Graph, EdgeTo, MAX_VALUE } from './types';

type ItemResult = {
  vertice: number;
  length: number;
};

const sortEdges = R.pipe<EdgeTo[], EdgeTo[]>(
  R.sortWith([R.ascend(R.prop('weight'))])
);

const passedVerticed: number[] = [];

const getMinVerticeRecursive = (graph: Graph, vertice: number): ItemResult => {
  if (!graph[vertice].done) {
    return { vertice, length: graph[vertice].value };
  }

  // condition to exit
  if (R.contains(vertice, passedVerticed)) {
    return { vertice, length: MAX_VALUE };
  }
  passedVerticed.push(vertice);


  const sortedEdges = sortEdges(graph[vertice].edges);
  const gettedVertices = sortedEdges.map(
    (item: EdgeTo) => getMinVerticeRecursive(graph, item.vertice)
  );

  const gettedVertice = R.pipe<ItemResult[], ItemResult[], ItemResult>(
    R.sortWith([R.ascend(R.prop('length'))]),
    R.head
  )(gettedVertices);

  return gettedVertice;
};

export const getMinVertice = (graph: Graph): ItemResult => {
  passedVerticed.length = 0;
  return getMinVerticeRecursive(graph, 1);
};
