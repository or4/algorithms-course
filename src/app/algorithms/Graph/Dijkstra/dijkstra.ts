import * as R from 'ramda';
import { convertToArray, getMinVerticeEdge, getMinVertice, GraphItem } from './utils';
import { objToString } from '../../../ramda/helpers';

const ids = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];



/* export const runDijkstra = (raw: string) => {
  const graph = convertToArray(raw);

  let locVertice = 1;
  graph[locVertice].value = 0;

  let i = 0;
  const output = [];
  while (true) {
    console.log('.');
    console.log('.');
    console.log('.');
    locVertice = getMinVertice(graph);
    if (locVertice === -1) {
      return output.join(' ');
    }
    output.push(locVertice);
    graph[locVertice].done = true;
    i++;
    console.log('i', i);
    if (i > 100) {
      return output.join(' ');
    }
  }
};
 */


export const runDijkstra = (raw: string) => {
  const graph = convertToArray(raw);

  let locVertice = 1;
  graph[locVertice].value = 0;
  console.log('runDijkstra locVertice', locVertice);

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

    locVertice = getMinVertice(graph);
    // console.log('runDijkstra locVertice', locVertice);
  }



  // console.log('graph', graph);
  //  console.log('newGraph', R.pipe(
  return R.pipe(
    R.toPairs,
    R.filter((item: any) => R.contains(Number(item[0]), ids)),
    // R.map((item: any) => [item[0], item[1]]),
    R.fromPairs,
    R.mapObjIndexed((value: GraphItem, key: string) => `${value.value}`),
    R.values,
    R.join(','))(graph);
/*
  const result = R.pipe(
    R.toPairs,
    R.reject((item: any) => R.equals(item[1].value, Infinity)),
    R.fromPairs,
    R.mapObjIndexed((value: GraphItem, key: string) => `${key},${value.value}`),
    R.values,
    R.join(' ')
  )(graph);
  console.log('result', result);
  return result; */
};
