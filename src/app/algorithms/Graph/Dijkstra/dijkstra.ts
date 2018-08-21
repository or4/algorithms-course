import * as R from 'ramda';
import { convertToArray, getMinVerticeEdge, getMinVertice } from './utils';
import { objToString } from '../../../ramda/helpers';

export const runDijkstra = (raw: string, vertice: number) => {
  const graph = convertToArray(raw);
  // console.log('graph', R.pipe(R.toPairs, R.map(R.map(objToString)), R.fromPairs)(graph));
  console.log('graph', graph);
  let node;
  let minEdge;
  let weightFromCurrNode;
  let weightFromAnotherNode;
  let locVertice = vertice;

  node = graph[locVertice];
  node.value = 0;

  while (locVertice !== -1) {
    node = graph[locVertice];
    for (let i = 0; i < node.edges.length; i++) {
      minEdge = getMinVerticeEdge(node.edges);
      if (!graph[minEdge.vertice].done) {
        weightFromCurrNode = node.value + minEdge.weight;
        weightFromAnotherNode = graph[minEdge.vertice].value;
        if (weightFromCurrNode < weightFromAnotherNode) {
          graph[minEdge.vertice].value = weightFromCurrNode;
        }
      }
      minEdge.visited = true;
    }
    node.done = true;

    locVertice = getMinVertice(graph, locVertice);
    console.log('locVertice', locVertice);
  }

  console.log('graph', graph);
};

