import * as R from 'ramda';
import { GraphItem, convertToArray } from './utils';
import { objToString } from '../../../ramda/helpers';


type StackItem = {
  vertice: number;
  len: number;
  index: number;
};

const dfsReverse = (graph: (GraphItem)[], start: number): any[] => {
  // console.log('graph', objToString(graph));
  const backVerticesArray = [] as any[];
  const stack = [{ vertice: start, len: graph[start] && graph[start].vertices.length || 0, index: 0 }] as StackItem[];
  let stackItem: StackItem | undefined = stack[0];
  let item = start;

  while (true) {
    const graphItem = graph[item];
    // console.log('graphItem', objToString(graphItem));

    if (R.isNil(graphItem) || !(stackItem && graphItem.currentVertice === stackItem.vertice) && graphItem.visited) {
      while (true) {
        stackItem = stack.pop();

        if (R.isNil(stackItem)) {
          return backVerticesArray;
        }

        backVerticesArray.push(stackItem.vertice);

        if (stackItem.index < stackItem.len - 1) {
          stackItem.index++;
          item = stackItem.vertice;
          break;
        }
      }
      continue;
    }

    graphItem.visited = true;

    const nextVertice = graphItem.vertices[stackItem.index];
    stack.push({ vertice: nextVertice, len: graph[nextVertice] && graph[nextVertice].vertices.length || 0, index: 0 });
    item = nextVertice;
  }
};

const sccsBackward = (raw: string): number[] => {
  const graph = convertToArray(raw, 'reverse');
  let vertices: number[] = [];
  // console.log('sccsBackward, graph', objToString(graph));

  let index = 0;
  while (graph[index] || index < graph.length) {
    if (!R.isNil(graph[index]) && !graph[index].visited) {
      // console.log('!!! index', index, 'visited', graph[index].visited);

      let backVerticesArray = dfsReverse(graph, index);
      // console.log('backVerticesArray', backVerticesArray);
      // backVerticesArray = R.drop(Math.floor(backVerticesArray.length / 2), backVerticesArray);
      // console.log('backVerticesArray', backVerticesArray);
      vertices = R.concat(vertices, backVerticesArray);
    } else if (R.isNil(graph[index])) {
      // vertices = R.append(index, vertices);
    }

    index++;
  }

  // console.log('vertices', vertices);
  return vertices;
};


const dfsRight = (graph: (GraphItem)[], start: number): number => {
  // console.log('start', start);

  const stack = [{ vertice: start, len: graph[start] && graph[start].vertices.length || 0, index: 0 }] as StackItem[];
  let stackItem: StackItem | undefined = stack[0];
  let item = start;
  const verticesAll = [];


  while (true) {

    const graphItem = graph[item];

    // console.log('verticesAll.push', item);
    if (!R.isNil(graphItem) && !graphItem.visited) {
      verticesAll.push(item);
    }



    // console.log('graphItem', objToString(graphItem));

    if (R.isNil(graphItem) || !(stackItem && graphItem.currentVertice === stackItem.vertice) && graphItem.visited) {
      while (true) {
        stackItem = stack.pop();

        if (R.isNil(stackItem)) {
          // console.log('verticesAll', verticesAll);
          return verticesAll.length;
        }



        if (stackItem.index < stackItem.len - 1) {
          stackItem.index++;
          item = stackItem.vertice;
          break;
        }
      }

      continue;
    }

    graphItem.visited = true;

    const nextVertice = graphItem.vertices[stackItem.index];
    stack.push({ vertice: nextVertice, len: graph[nextVertice] && graph[nextVertice].vertices.length || 0, index: 0 });
    item = nextVertice;
  }
};


const sccsToward = (raw: string, vertices: number[]): string => {
  const output = [] as number[];
  const graph = convertToArray(raw);
  // console.log('sccsToward, graph', objToString(graph));

  let index = vertices.length - 1;
  while (index >= 0) {
    const graphIndex = vertices[index];
    // console.log('graphIndex', graphIndex);
    // console.log('graph[graphIndex]', graph[graphIndex]);

    if (!R.isNil(graph[graphIndex]) && !graph[graphIndex].visited) {
      const cycleLength = dfsRight(graph, graphIndex);
      // console.log('output push cycleLength', cycleLength);
      output.push(cycleLength);
    } else if (R.isNil(graph[graphIndex])) {
      // console.log('output push 1');
      output.push(1);
    }

    index--;
  }

  // return R.pipe(R.take(5), R.join(', '))(output);
  return R.pipe(R.sort((a: number, b: number) => b - a), R.take(5), R.join(', '))(output);
};



export const sccs = (raw: string): string => {
  const vertices = sccsBackward(raw);
  const output = sccsToward(raw, vertices);
  console.log('sccs, output', output);
  return output;
};