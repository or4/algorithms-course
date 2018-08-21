import * as R from 'ramda';

type VerticeNode = {
  vertice: number;
  weight: number;
};

export type Graph = {
  [key: number]: {
    edges: VerticeNode[];
    value: number;
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
        R.map<any, VerticeNode[]>( // transform item to object like { vertice: 12, weight: 17 }
          R.pipe<string, string[], number[], VerticeNode>(R.split(','), R.map(Number), R.zipObj(['vertice', 'weight']) as any)
        ),
        R.objOf('edges'), // tranform to object with key edges and values VerticeNode[]
        R.assoc('value', 0)
      ),
    ),
  )(data) as any;

  return splitted;
};
