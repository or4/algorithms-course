import * as R from 'ramda';

export class GraphItem {
  visited: boolean;
  currentVertice: number;
  vertices: number[]; // to vertices

  constructor(currentVertice: number) {
    this.currentVertice = currentVertice;
    this.vertices = [];
  }

  public push(vertice: number) {
    if (vertice === this.currentVertice || this.vertices.indexOf(vertice) !== -1) {
      return;
    }
    this.vertices.push(vertice);
  }
}

type GraphOrder = 'right' | 'reverse';

export const convertToArray = (data: string, order: GraphOrder = 'right') => {
  const splitted = R.pipe<string, string[], number[][]>(
    R.split('\n'),
    R.map(
      R.pipe(
        R.split(' '),
        R.map(Number),
        R.when(
          () => order !== 'right',
          R.pipe<number[], number[]>(
            // R.tap(console.log),
            R.reverse,
            // R.tap(console.log),
          )
        )
      )
    )
  )(data);

  const output = [] as GraphItem[];
  splitted.forEach((item: number[]): void => {
    const currentVertice = item[0];
    const toVertice = item[1];

    if (R.isNil(output[currentVertice])) {
      output[currentVertice] = new GraphItem(currentVertice);
    }

    output[currentVertice].push(toVertice);
  });

  return output;
};


export const checkConsistency = (graph: GraphItem[]) => {
  let i = 2;
  for (; i < graph.length; i++) {
    try {
      if ((graph[i].currentVertice - graph[i - 1].currentVertice) !== 1) {
        console.log('checkConsistency', i);
        break;
      }
    } catch (error) {
      console.log('checkConsistency, i', i, error);
      throw new Error(error);
    }
  }
  console.log('checkConsistency done', i);
};