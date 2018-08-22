import * as R from 'ramda';
import { isNotNil, objToString } from '../../../ramda/helpers';
import _ from 'lodash';
import { List } from 'immutable';

type VerticeNode = {
  vertice: number;
  weight: number;
  visited: boolean;
};

export type GraphItem = {
  edges: VerticeNode[];
  value: number;
  done: boolean;
};

export type Graph = {
  [key: number]: GraphItem;
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
        R.assoc('value', 1000000),
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

let iCounter = Math.pow(10, 6);

export const getMinVertice = (graph: Graph, startVertice: number = 1): number => {
  let stack: List<number> = List([]);
  // const verticesCounter: number[] = [];
  let locVertice: number = startVertice;

  const maxLen = R.pipe(R.toPairs, R.reject((item: any) => R.isNil(item[1])), R.fromPairs, R.values, R.length)(graph);

  // while (!R.isNil(locVertice) && i < 100) {
  do {
    const verticeNode = graph[locVertice];
    // if (!R.contains(locVertice, verticesCounter)) {
    //   verticesCounter.push(locVertice);
    //   // console.log('pushed', locVertice, verticesCounter);
    // }
    // console.log(`locVertice=${locVertice}, node=${objToString(verticeNode)}, stack=${objToString(stack)}`);

    const sortedEdges = R.sortWith([R.ascend(R.prop('weight'))])(verticeNode.edges) as VerticeNode[];

    for (let i = 0; i < sortedEdges.length; i++) {
      const vertice = sortedEdges[i].vertice;
      stack.push(vertice);
      console.log(`stack pushed vertice=${vertice}`);

      if (!graph[vertice].done) { return vertice }
    }

    // console.log(`locVertice=${locVertice},stack=${objToString(stack)}`);
    locVertice = stack.first();
    stack = stack.shift();

    console.log('locVertice', locVertice);

    if (R.isNil(locVertice)) {
      return -1;
    }

    // console.log(`locVertice=${locVertice},stack=${objToString(stack)}`);

    // console.log(`i=${i}, maxLen=${maxLen}, verticesCounter.length=${verticesCounter.length}`, verticesCounter);
    if (iCounter % Math.pow(10, 5) === 0) {
      console.log(`i=${iCounter}, sortedEdges=${sortedEdges.length}`);
    }
    iCounter--;
  // } while (verticesCounter.length < maxLen && i > 0);
  } while (iCounter > 0);

  // console.log('stack', stack.length);


  return -1;
};

/*
export const getMinVerticeOld = (graph: Graph, vertice: number): number => {
  // console.log(`getMinVertice start, vertice=${vertice}`);

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
 */