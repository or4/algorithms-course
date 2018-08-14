import * as R from 'ramda';
import { GraphItem } from './utils';

function getLength(graph: GraphItem[], from: number, vertice: number): number {
  // console.log(`getLength from=${from}, vertice=${vertice}`);
  graph[from].visited = true;

  if (from === vertice) {
    return 1;
  }
  return R.apply(Math.max, graph[from].vertices.map(
    item => getLength(graph, item, vertice) + 1
  ));
}

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
      getLength(graph, itemFrom.vertices[0], itemFrom.currentVertice)
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
