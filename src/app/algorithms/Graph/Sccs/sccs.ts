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


// function getLengthIterative(graph: GraphItem[], from: number, vertice: number): number {
//   // console.log(`getLengthRunner from=${from}, vertice=${vertice}`);
//   graph[from].visited = true;
//   let index = from;
//   let i = 0;
//   const stack = [];
//   stack.push(index);

//   while (true) {


//     const vertices = graph[index].vertices;

//     if (from === vertices[i]) {
//       // break;
//       return 1;
//     }

//     stack.push(vertices[i]);

//     i++;

//   }


// const resArray = graph[from].vertices.map(
//   // item => getLengthRecursive(graph, item, vertice) + 1
//   () => '123'
// );

// return R.apply(Math.max, resArray);
// }



export const sccs = (graph: GraphItem[]): string => {
  console.log(graph);
  let output = [] as number[];

  let index = 1;
  while (graph[index]) {
    if (graph[index].visited) {
      index++;
      continue;
    }

    const itemFrom = graph[index];
    console.log('itemFrom', itemFrom);

    output.push(
      getLengthRecursive(graph, itemFrom.vertices[0], itemFrom.currentVertice)
    );
    index++;
  }

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
