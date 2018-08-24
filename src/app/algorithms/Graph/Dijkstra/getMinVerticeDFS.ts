import { List } from 'immutable';
import { Graph, VerticeNode } from './utils';
import * as R from 'ramda';
import { isNotNil, objToString } from '../../../ramda/helpers';

type ItemResult = {
  vertice: number;
  length: number;
};


const sort = R.pipe<VerticeNode[], VerticeNode[]>(R.sortWith([
  R.ascend(R.prop('weight'))
]));

// let iCounter = 0;
let passedVerticed: number[] = [];
// let firstFlag = true;

const getMinVertice = (graph: Graph, vertice: number, length: number): ItemResult => {
  // console.log(`start, vertice=${vertice}, length=${length}, isDone=${graph[vertice].done}, passedVerticed=${objToString(passedVerticed)}`);
  // if (++iCounter > 500) { console.log('Exit by STACKOVERFLOW, iCounter', iCounter); return { vertice: -1, length: Infinity } }
  // console.log(`vertice=${vertice}, iCounter=${iCounter}`);

  if (!graph[vertice].done) {
    // console.log('SUCCESS RETURN vertice', vertice, 'length', graph[vertice].value);
    return { vertice, length: graph[vertice].value };
  }

  if (R.contains(vertice, passedVerticed)) {
    // console.log('RETURN by passedVerticed, vertice is ', vertice);
    return { vertice, length: Infinity };
  }
  passedVerticed.push(vertice);

  const sortedEdges = sort(graph[vertice].edges);
  // console.log('sortedEdges', objToString(sortedEdges));

  // firstFlag = false;

  const gettedVertices = sortedEdges.map((item: VerticeNode) => getMinVertice(graph, item.vertice, graph[vertice].value));
  // console.log('gettedVertices', objToString(gettedVertices));


  const gettedVertice = R.pipe<ItemResult[], ItemResult[], ItemResult>(
    R.sortWith([R.ascend(R.prop('length'))]),
    R.head
  )(gettedVertices);
  // console.log('gettedVertice', objToString(gettedVertice));


  // console.log('RETURN gettedVertice', gettedVertice);
  return gettedVertice as any as ItemResult;
  // return { vertice: -1, length: Infinity };
};



const resetSearchVerticeVisited = R.pipe(
  R.toPairs, R.map((item: any) => [item[0], R.assoc('svVisited', false, item[1])]), R.fromPairs
);


export const getMinVerticeDFS = (graph: Graph): ItemResult => {
  // console.log('START getMinVerticeDFS',
  //   objToString(
  //     R.pipe(
  //       R.toPairs,
  //       R.map(
  //         (pair: any) => ([
  //           pair[0],
  //           R.pipe(R.toPairs, R.reject((pair: any) => (pair[0] === 'edges')), R.fromPairs)(pair[1])
  //         ])
  //       ),
  //       R.fromPairs
  //     )(graph)
  //   )
  // );
  // const locGraph = resetSearchVerticeVisited(graph) as any;

  // console.log('locGraph', locGraph);
  const result = getMinVertice(graph, 1, 0);
  // firstFlag = true;

  // if (result.vertice === 1) {
  // passedVerticed.push(result.vertice);
  // }

  passedVerticed.length = 0;

  // console.log('DONE result', result);
  return result;
};


  // if (graph[vertice].svVisited) {
  //   return -1;
  // }
  // graph[vertice].svVisited = true;

  // if (R.isNil(graph[vertice])) {
  //   return { vertice: -1, length: Infinity };
  // }