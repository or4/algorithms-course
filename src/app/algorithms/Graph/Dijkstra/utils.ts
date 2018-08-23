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
// let iCounter = 100;

const alreadyProcessed: number[] = [];

const addToAlreadyProccessed = (vertice: number) => {
  // console.log('addToAlreadyProccessed', vertice);
  if (!R.contains(vertice, alreadyProcessed)) {
    alreadyProcessed.push(vertice);
    // console.log('addToAlreadyProccessed pushed', vertice, objToString(alreadyProcessed));
  }
};

const notExistInAlreadyProccessed = (vertice: number) => !R.contains(vertice, alreadyProcessed);

export const getMinVertice = (graph: Graph, startVertice: number = 1): number => {
  let stack: List<number> = List([]);
  alreadyProcessed.length = 0;

  // const verticesCounter: number[] = [];
  let locVertice: number = startVertice;
  if (!graph[locVertice].done) {
    // addToAlreadyProccessed(locVertice);
    // console.log('RETURN locVertice', locVertice);
    return locVertice;
  }

  // const maxLen = R.pipe(R.toPairs, R.reject((item: any) => R.isNil(item[1])), R.fromPairs, R.values, R.length)(graph);

  // while (!R.isNil(locVertice) && i < 100) {
  do {
    const verticeNode = graph[locVertice];

    addToAlreadyProccessed(locVertice);
    // if (!R.contains(locVertice, verticesCounter)) {
    //   verticesCounter.push(locVertice);
    //   // console.log('pushed', locVertice, verticesCounter);
    // }
    // console.log(`locVertice=${locVertice}, node=${objToString(verticeNode)}, stack=${objToString(stack)}`);

    const sortedEdges = R.sortWith([R.ascend(R.prop('weight'))])(verticeNode.edges) as VerticeNode[];
    // console.log('sortedEdges', sortedEdges);

    // find at current level
    for (let i = 0; i < sortedEdges.length; i++) {
      const vertice = sortedEdges[i].vertice;
      if (!graph[vertice].done) {
        // addToAlreadyProccessed(vertice);
        // console.log('RETURN by SortedEdges vertice', vertice);
        return vertice;
      }
    }

    // if not found, than push to queue this level and process each
    for (let i = 0; i < sortedEdges.length; i++) {
      const vertice = sortedEdges[i].vertice;

      stack = stack.push(vertice);
      // console.log('stack after push', objToString(stack.toJS()));
    }

    // console.log(`locVertice=${locVertice},stack=${objToString(stack)}`);
    while (true) {
      locVertice = stack.first();
      stack = stack.shift();
      // console.log('GET FROM STACK, NOW CURRENT locVertice is', locVertice, 'other vertices', stack.toJS());


      if (R.isNil(locVertice)) {
        console.log('EXIT BY STACK IS EMPTY, iCounter', iCounter);
        return -1;
      }

      if (notExistInAlreadyProccessed(locVertice)) {
        // console.log('BREAK CAUSE FIND locVertice', locVertice);
        break;
      }
    }

    // console.log(`locVertice=${locVertice},stack=${objToString(stack)}`);

    // console.log(`i=${i}, maxLen=${maxLen}, verticesCounter.length=${verticesCounter.length}`, verticesCounter);
    // if (iCounter % Math.pow(10, 3) === 0) {
    // console.log(`i=${iCounter}, sortedEdges=${sortedEdges.length}`);
    //}
    iCounter--;
    // console.log('stack', iCounter, objToString(stack.toJS()));
    if (iCounter <= 0) {
      console.log('EXIT BY iCounter', iCounter);
      return -1;
    }
  // } while (verticesCounter.length < maxLen && i > 0);
  } while (true);

  // console.log('stack', stack.length);
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