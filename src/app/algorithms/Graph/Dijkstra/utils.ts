import * as R from 'ramda';

type VerticeNode = {
  vertice: number;
  length: number;
};

export class GraphItem {
  visited: boolean;
  vertice: number;
  vertices: VerticeNode[]; // to vertices

  constructor(vertice: number) {
    this.vertice = vertice;
    this.vertices = [];
  }

  public push(node: VerticeNode) {
    if (node.vertice === this.vertice || R.contains(node, this.vertices)) {
      return;
    }
    this.vertices.push(node);
  }
}

export const convertToArray = (data: string): GraphItem[] => {

  const splitted = R.pipe(
    R.split('\n'),

    R.map(

      R.pipe(
        R.split(' '),
        R.map(
          R.split(',')
        )
      )

    )

  )(data);

  console.log('splitted', splitted);
  const indexed = R.indexBy(R.prop('0'), splitted);
  console.log('indexed', indexed);


  // const output = [] as GraphItem[];
  // splitted.forEach((item: number[]): void => {
  //   const vertice = item[0];
  //   const toVertice = item[1];

  //   if (R.isNil(output[vertice])) {
  //     output[vertice] = new GraphItem(vertice);
  //   }

  //   output[vertice].push(toVertice);
  // });

  // return output;
  return [] as any;
};
