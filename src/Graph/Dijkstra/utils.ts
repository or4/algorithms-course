import * as R from 'ramda';
import { Graph, MAX_VALUE, EdgeTo } from './types';

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
        R.objOf('edges'), // tranform to object with key edges and values EdgeTo[]
        R.assoc('value', MAX_VALUE),
        R.assoc('done', false),
      ),
    ),
  )(data) as any;

  return splitted;
};

export const getMinVerticeEdge = (nodes: EdgeTo[]): EdgeTo => {
  return R.pipe<EdgeTo[], EdgeTo[], EdgeTo>(
    R.sortWith([
      R.ascend(R.prop('visited')),
      R.ascend(R.prop('weight'))
    ]),
    R.head
  )(nodes) as EdgeTo;
};

