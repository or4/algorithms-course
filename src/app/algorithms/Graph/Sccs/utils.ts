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

export const convertToArray = (data: string) => {
  const splitted = R.pipe<string, string[], number[][]>(
    R.split('\n'),
    R.map(
      R.pipe(
        R.split(' '),
        R.map(Number)
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
