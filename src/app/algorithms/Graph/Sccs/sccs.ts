import * as R from 'ramda';
import { GraphItem, convertToArray } from './utils';
import { objToString } from '../../../ramda/helpers';

const backVerticesArray = [] as any[];

type StackItem = {
  vertice: number;
  len: number;
  index: number;
};

let counterAll = 1;
const verticeAll = [] as number[];

const dfsIterative = (graph: (GraphItem)[], start: number): void => {
  const stack = [] as StackItem[];
  let stackItem;
  let item = start;
  let i = 0;

  while (true) {
    // console.log('while true');

    const graphItem = graph[item];
    // console.log(`dfsIterative, graphItem ${counterAll} item = ${item}`);
    counterAll++;
    if (verticeAll.indexOf(item) === -1) {
      verticeAll.push(item);
    }

    // if (!R.isNil(graph[item]) && !graph[item].visited) {
    //   backVerticesArray.push(item);
    // }
    // if (R.isNil(graph[item])) {
    //   if (graph[item] !== null) {
    //     backVerticesArray.push(item);
    //   } else {
    //     graph[item] = null as any;
    //   }
    // }


    if (R.isNil(graphItem) || !(stackItem && graphItem.currentVertice === stackItem.vertice) && graphItem.visited) {
      // go away by stack.pop
      // stackItem = stack.pop();
      // item = stackItem.vertice;


      while (true) {
        stackItem = stack.pop();

        if (R.isNil(stackItem)) {
          // console.log('exit from dfsIterative');
          return;
        }
        // console.log('dfsIterative, pop', stackItem.vertice);

        if (stackItem.index < stackItem.len - 1) {
          // console.log('stackItem.index', stackItem);
          stackItem.index++;
          // console.log('set new index pre', index);
          item = stackItem.vertice;
          // console.log('set new index', index);
          break;
        }
      }
      continue;
    }

    graphItem.visited = true;


    let workVertice;
    if (!R.isNil(stackItem) && stackItem.vertice === graphItem.currentVertice) {
      workVertice = graphItem.vertices[stackItem.index];
    } else {
      workVertice = graphItem.vertices[0];
    }

    // console.log('workVertice', workVertice);



    // console.log('pre push, workVertice', workVertice);
    stack.push({ vertice: workVertice, len: graph[workVertice] && graph[workVertice].vertices.length || 0, index: 0 });
    item = workVertice;
  }

};


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

  // console.log('backVerticesArray', backVerticesArray);
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

  // console.log('grapItem start', graphItem.currentVertice);
  // console.log('grapItem start', graphItem.vertices);
  graphItem.visited = true;

  const results = graphItem.vertices.map((item: number) => {
    // if (!R.isNil(graph[item]) && !graph[item].visited) {
    const resDfs = dfsMax(graph, item);
    return { len: resDfs.len + 1, path: [item, ...resDfs.path] };
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
  // const backVerticesSorted = backVerticesArray.sort((a, b) => b - a);
  const backVerticesSorted = backVerticesArray;
  // console.log('backVerticesSorted', backVerticesSorted);
  const output = [] as DfsMax[];

  let index = backVerticesSorted.length - 1;
  while (index >= 0) {
    // for (let i = 0; i < graph.length; i++) {
    //   if (R.isNil(graph[i])) {
    //     continue;
    //   }
    //   graph[i].visited = false;
    // }

    const graphIndex = backVerticesSorted[index];
    // console.log('graphIndex', graphIndex);
    if (!R.isNil(graph[graphIndex]) && !graph[graphIndex].visited) {
      const graphItem = graph[graphIndex];
      const resultDfs = dfsMax(graph, graphItem.currentVertice);
      output.push(resultDfs);
    }
    if (R.isNil(graph[graphIndex])) {
      output.push({ len: 1, path: [graphIndex] });
      // console.log(`11 graphIndex=${graphIndex}, index=${index}`);
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
  // prepareBackwards(raw);
  // return towards(raw);

  const output1 = [] as number[];

  const graph = convertToArray(raw);
  const graphStr = objToString(graph);

  let index = 1;
  while (graph[index] || index < graph.length) {
    if (!R.isNil(graph[index]) && !graph[index].visited) {
      dfsIterative(graph, index);

      // console.log('counterAll', counterAll);
      // console.log('verticeAll', verticeAll);
      // console.log('verticeAll.length', verticeAll.length);
      output1.push(verticeAll.length);
      verticeAll.length = 0;
    }
    index++;
  }

  const res =  R.pipe(
    R.sort((a: number, b: number) => b - a),
    R.take(5),
    R.join(', ')
  )(output1);

  // console.log('output1', output1);
  // console.log('res', res);

  return res;

  // return graphStr;
};