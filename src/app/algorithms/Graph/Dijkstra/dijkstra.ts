import * as R from 'ramda';
import { convertToArray, getMinVerticeEdge, GraphItem } from './utils';
import { objToString } from '../../../ramda/helpers';
import { getMinVerticeDFS } from './getMinVerticeDFS';

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

  while (locVertice !== -1) {
    console.log('runDijkstra locVertice', locVertice);
    const node = graph[locVertice];
    // locVertice === 4 && console.log(objToString(node));
    // locVertice === 4 && console.log(objToString(node.edges));

    for (let i = 0; i < node.edges.length; i++) {
      const minEdge = getMinVerticeEdge(node.edges);
      locVertice === 4 && console.log('minEdge', objToString(minEdge));

      if (!graph[minEdge.vertice].done) {

        const weightFromCurrentNode = node.value + minEdge.weight;
        // locVertice === 4 && console.log('iterate vertices', minEdge.vertice, weightFromCurrentNode);
        // locVertice === 4 && console.log('iterate vertices node.value', node.value);
        // locVertice === 4 && console.log('iterate vertices minEdge.weight', minEdge.weight);

        if (weightFromCurrentNode < graph[minEdge.vertice].value) {
          graph[minEdge.vertice].value = weightFromCurrentNode;
          // locVertice === 4 && console.log('set value', minEdge.vertice, graph[minEdge.vertice].value);
        }
      }
      minEdge.visited = true;
    }
    console.log('done', objToString(locVertice), objToString(graph[locVertice].value));
    node.done = true;

    locVertice = getMinVerticeDFS(graph).vertice;
  }

  console.log(objToString(
    R.pipe(
      R.mapObjIndexed((item: any) => ({ done: item.done, value: item.value })),
      R.toPairs,
      R.filter((item: any) => item[1].done),
      R.fromPairs
    )(graph)
  ));



  // console.log('graph', graph);
  //  console.log('newGraph', R.pipe(
  return R.pipe(
    R.toPairs,
    // R.filter((item: any) => R.contains(Number(item[0]), ids)),
    // R.map((item: any) => [item[0], item[1]]),
    R.fromPairs,
    // R.mapObjIndexed((value: GraphItem, key: string) => `${value.value}`),
    R.mapObjIndexed((value: GraphItem, key: string) => `${key}-${value.value}`),
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
