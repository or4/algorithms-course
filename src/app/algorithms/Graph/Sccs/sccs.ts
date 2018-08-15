import * as R from 'ramda';
import { GraphItem } from './utils';



function getLengthRecursive(graph: GraphItem[], from: number, vertice: number): number {
  // console.log(`getLengthRunner from=${from}, vertice=${vertice}`);
  graph[from].visited = true;

  if (from === vertice) {
    return 1;
  }

  const resArray = graph[from].vertices.map(
    item => getLengthRecursive(graph, item, vertice) + 1
  );

  return R.apply(Math.max, resArray);
}

type StackItem = {
  vertice: number;
  len: number;
  index: number;
};

function getLengthIterative(graph: GraphItem[], vertice: number): number {

  let index = vertice;
  let i = 0;
  let counter = 0;
  const stack = [] as StackItem[];
  // stack.push(index);
  let maxCycle = 0;
  let stackItem;

  while (true) {
    // console.log('start cycle');
    const vertices = graph[index].vertices;
    // console.log('index', index, 'vertices', vertices);
    graph[index].visited = true;
    counter++;

    let workVertice;
    if (!R.isNil(stackItem) && stackItem.vertice === index) {
      workVertice = vertices[stackItem.index];
    } else {
      workVertice = vertices[0];
    }
    // console.log('workVertice', workVertice);

    if (vertice === workVertice) {
      // console.log('stack', stack);
      if (maxCycle < counter) {
        maxCycle = counter;
      }
      while (true) {
        stackItem = stack.pop();
        counter--;
        if (R.isNil(stackItem)) {
          return maxCycle;
        }
        if (stackItem.index < stackItem.len - 1) {
          // console.log('stackItem.index', stackItem);
          stackItem.index++;
          // console.log('set new index pre', index);
          index = stackItem.vertice;
          // console.log('set new index', index);
          break;
        }
      }
      continue;
    }
    // console.log(graph);

    stack.push({ vertice: workVertice, len: graph[workVertice].vertices.length, index: 0 });
    if (stack.length % 1000000 === 0) {
      console.log(stack.length);
    }
    index = workVertice;
  }
}



export const sccs = (graph: GraphItem[]): string => {
  // console.log(graph);
  let output = [] as number[];

  let index = 1;
  // while (graph[index]) {
  //   if (graph[index].visited) {
  //     index++;
  //     continue;
  //   }

  const itemFrom = graph[index];

  output.push(getLengthIterative(graph, itemFrom.currentVertice));
  //   index++;
  // }

  output = R.sort((a, b) => b - a, output);

  const addNullIfLessThan5 = R.when<number[], number[]>(
    R.pipe(R.length, R.partialRight(R.lt as any, [5])),
    R.append(0)
  );

  R.times(() => {
    output = addNullIfLessThan5(output);
  }, 5);

  return output.join(', ');
};
