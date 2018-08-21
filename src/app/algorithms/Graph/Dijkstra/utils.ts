import * as R from 'ramda';

type VerticeNode = {
  vertice: number;
  weight: number;
  visited: boolean;
};

export type Graph = {
  [key: number]: {
    edges: VerticeNode[];
    value: number;
    done: boolean;
  };
};

export const convertToArray = (data: string): Graph => {
  const splitted = R.pipe(
    R.split('\n'),
    R.map(R.split(' ')), // split line to vertice and items
    R.indexBy(R.prop('0') as any), // set vertice as key object in array

    R.mapObjIndexed(
      R.pipe(
        R.drop(1), // skip first element (this is not item, this is a vertice that key object)
        R.map<any, any[]>( // transform item to object like { vertice: 12, weight: 17 }
          R.pipe<string, string[], number[], any, any>(R.split(','), R.map(Number), R.zipObj(['vertice', 'weight']) as any, R.assoc('visited', false) as any)
        ),
        R.objOf('edges'), // tranform to object with key edges and values VerticeNode[]
        R.assoc('value', Infinity),
        R.assoc('done', false),
      ),
    ),
  )(data) as any;

  return splitted;
};


export const getMinVerticeEdge = (nodes: VerticeNode[]): VerticeNode => {
  return R.pipe<VerticeNode[], VerticeNode[], VerticeNode>(
    R.sortWith([
      R.ascend(R.prop('visited')),
      R.ascend(R.prop('weight'))
    ]),
    R.head
  )(nodes) as VerticeNode;
};


export const getMinVertice = (graph: Graph, vertice: number): number => {

  const verticeNode = graph[vertice];
  const edges = R.sortWith([
    R.ascend(R.prop('weight'))
  ])(verticeNode.edges) as VerticeNode[];

  for (let i = 0; i < edges.length; i++) {
    const subVertice = graph[edges[i].vertice];
    if (!subVertice.done) {
      return edges[i].vertice;
    }
  }

  return -1;
};
