import * as R from 'ramda';
import { convertToArray, getMinVerticeEdge, getMinVertice, GraphItem } from './utils';
import { objToString } from '../../../ramda/helpers';

export const runDijkstra = (raw: string, vertice: number) => {
  const graph = convertToArray(raw);

  let locVertice = vertice;
  graph[locVertice].value = 0;

  while (locVertice !== -1) {
    const node = graph[locVertice];
    for (let i = 0; i < node.edges.length; i++) {
      const minEdge = getMinVerticeEdge(node.edges);
      if (!graph[minEdge.vertice].done) {
        const weightFromCurrentNode = node.value + minEdge.weight;
        if (weightFromCurrentNode < graph[minEdge.vertice].value) {
          graph[minEdge.vertice].value = weightFromCurrentNode;
        }
      }
      minEdge.visited = true;
    }
    node.done = true;

    locVertice = getMinVertice(graph, locVertice);
    // console.log('locVertice', locVertice);
  }

  console.log('graph', graph);
  const result = R.pipe(
    R.mapObjIndexed((value: GraphItem, key: string) => `${key},${value.value}`),
    R.values,
    R.join(' ')
  )(graph);
  console.log('result', result);
  return result;
};

