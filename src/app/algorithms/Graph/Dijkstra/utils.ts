import * as R from 'ramda';
import { isNotNil, objToString } from '../../../ramda/helpers';
import _ from 'lodash';
import { List } from 'immutable';

export type VerticeNode = {
  vertice: number;
  weight: number;
  visited: boolean;
};

export type GraphItem = {
  edges: VerticeNode[];
  value: number;
  done: boolean;
  svVisited?: boolean;
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

