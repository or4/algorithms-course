import * as R from 'ramda';
import { MAX_VALUE, GraphItem } from './types';
import { getMinVertice } from './getMinVertice';
import { convertToArray, getMinVerticeEdge } from './utils';
import { objToString } from '../../../ramda/helpers';

const ids = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];

export const runDijkstra = (raw: string) => {
  const graph = convertToArray(raw);

  let vertice = 1;
  graph[vertice].value = 0;

  while (vertice !== -1) {
    const node = graph[vertice];

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

    const verticeMin = getMinVertice(graph);
    vertice = verticeMin.vertice;

    if (verticeMin.length === MAX_VALUE) {
      break;
    }
  }

  console.log(objToString(
    R.pipe(
      R.mapObjIndexed((item: any) => ({ done: item.done, value: item.value })),
      R.toPairs,
      R.filter((item: any) => item[1].done),
      R.fromPairs
    )(graph)
  ));

  return R.pipe(
    R.toPairs,
    // R.filter((item: any) => R.contains(Number(item[0]), ids)), // for coursera
    R.fromPairs,
    // R.mapObjIndexed((value: GraphItem, key: string) => `${value.value}`), // for coursera
    R.mapObjIndexed((value: GraphItem, key: string) => `${key}-${value.value}`),
    R.values,
    R.join(','))(graph);
};

