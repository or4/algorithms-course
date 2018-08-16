import * as R from 'ramda';
import { GraphItem, convertToArray } from './utils';
import { objToString } from '../../../ramda/helpers';

const backVerticesArray = [] as any[];

const dfs = (graph: (GraphItem)[], start: number): void => {
  const graphItem = graph[start];
  if (R.isNil(graphItem) || graphItem.visited) {
    // console.log(`end of chain, to=${start}`);
    return;
  }

  // console.log('grapItem start', graphItem.currentVertice);
  graphItem.visited = true;

  graphItem.vertices.map((item: number) => {
    if (!R.isNil(graph[item]) && !graph[item].visited) {
      dfs(graph, item);
      backVerticesArray.push(item);
    }
    if (R.isNil(graph[item])) {
      if (graph[item] !== null) {
        backVerticesArray.push(item);
      } else {
        graph[item] = null as any;
      }
    }
    return 0;
  });
};

export const prepareBackwards = (raw: string): void => {
  const graph = convertToArray(raw, 'reverse');
  // console.log('graphReversed', graph);

  let index = 0;
  while (graph[index] || index < graph.length) {
    if (!R.isNil(graph[index]) && !graph[index].visited) {
      dfs(graph, index);
      backVerticesArray.push(index);
    }
    index++;
  }

  console.log('backVerticesArray', backVerticesArray);
};

type DfsMax = {
  len: number;
  path: number[];
};


const dfsMax = (graph: (GraphItem)[], start: number): DfsMax => {
  const graphItem = graph[start];
  if (R.isNil(graphItem) || graphItem.visited) {
    // console.log(`end of chain, to=${start}`);
    return { len: 0, path: [] };
  }

  // console.log('grapItem start', graphItem.currentVertice);
  graphItem.visited = true;

  const results = graphItem.vertices.map((item: number) => {
    // if (!R.isNil(graph[item]) && !graph[item].visited) {
    const resDfs = dfsMax(graph, item);
    return { len: resDfs.len + 1, path: [...resDfs.path, item] };
    // }
    // return 1;
  });

  return R.reduce((acc: DfsMax, current: DfsMax) => {
    if (R.isNil(current) || acc.len >= current.len) {
      return acc;
    }
    return current;
  }, { len: 0, path: [] }
  )(results);
};



export const towards = (raw: string): string => {
  const graph = convertToArray(raw);
  // console.log('graphOrig', graph);
  const backVerticesSorted = backVerticesArray.sort((a, b) => b - a);
  console.log('backVerticesSorted', backVerticesSorted);
  const output = [] as DfsMax[];

  let index = 0;
  while (index < backVerticesSorted.length) {
    // for (let i = 0; i < graph.length; i++) {
    //   if (R.isNil(graph[i])) {
    //     continue;
    //   }
    //   graph[i].visited = false;
    // }

    const graphIndex = backVerticesSorted[index];
    if (!R.isNil(graph[graphIndex]) && !graph[graphIndex].visited) {
      const graphItem = graph[graphIndex];
      const resultDfs = dfsMax(graph, graphItem.currentVertice);
      output.push(resultDfs);
    }
    index++;
  }

  console.log('graphOrig', graph);

  console.log('output', objToString(output));

  return objToString(output);
  // return R.uniq(output).sort((a, b) => b - a);
};

export const sccs = (raw: string): string => {
  prepareBackwards(raw);
  return towards(raw);
};