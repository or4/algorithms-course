import * as R from 'ramda';
import { GraphItem, convertToArray } from './utils';

const backVerticesArray = [] as any[];

const dfs = (graph: (GraphItem)[], start: number): void => {
  const graphItem = graph[start];
  if (R.isNil(graphItem) || graphItem.visited) {
    return;
  }
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

const prepareBackwards = (raw: string): void => {
  const graph = convertToArray(raw, 'reverse');

  let index = 0;
  while (graph[index] || index < graph.length) {
    if (!R.isNil(graph[index]) && !graph[index].visited) {
      dfs(graph, index);
      backVerticesArray.push(index);
    }
    index++;
  }
};

type DfsMax = {
  len: number;
  path: number[];
};

const dfsMax = (graph: (GraphItem)[], start: number): DfsMax => {
  const graphItem = graph[start];
  if (R.isNil(graphItem) || graphItem.visited) {
    // console.log(`888 end of chain, start=${start}, graphItem=${objToString(graphItem)}`);
    return { len: 0, path: [] };
  }

  graphItem.visited = true;

  const results = graphItem.vertices.map((item: number) => {
    const resDfs = dfsMax(graph, item);
    return { len: resDfs.len + 1, path: [item, ...resDfs.path] };
  });

  return R.reduce((acc: DfsMax, current: DfsMax) => {
    if (R.isNil(current) || acc.len >= current.len) {
      return acc;
    }
    return current;
  }, { len: 0, path: [] }
  )(results);
};



const towards = (raw: string): string => {
  const graph = convertToArray(raw);
  const backVerticesSorted = backVerticesArray;
  const output = [] as DfsMax[];

  let index = backVerticesSorted.length - 1;
  while (index >= 0) {
    const graphIndex = backVerticesSorted[index];

    if (!R.isNil(graph[graphIndex]) && !graph[graphIndex].visited) {
      const graphItem = graph[graphIndex];
      const resultDfs = dfsMax(graph, graphItem.currentVertice);
      output.push(resultDfs);
    }
    if (R.isNil(graph[graphIndex])) {
      output.push({ len: 1, path: [graphIndex] });
    }
    index--;
  }

  return R.pipe<DfsMax[], number[], number[], string>(
    R.map(item => item.len),
    R.sort((a, b) => b - a),
    R.join(', '),
  )(output);
};

export const sccs = (raw: string): string => {
  prepareBackwards(raw);
  return towards(raw);
};