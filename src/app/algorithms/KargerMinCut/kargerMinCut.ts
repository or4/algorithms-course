import { getRandomInteger } from './utils';

const cut = (graph: string[][], mainVertexIndex: number, contiguousVertexIndex: number) => {
  const mainEdges = graph[mainVertexIndex];
  const mainVertex = mainEdges[0];
  const contiguousEdges = graph[contiguousVertexIndex];
  const contiguousVertex = contiguousEdges[0];

  const mergedRows = ([] as string[]);
  const newName = `${mainVertex}-${contiguousVertex}`;
  mergedRows.push(newName);

  for (let i = 0; i < mainEdges.length; i++) {
    if (mainEdges[i] === mainVertex || mainEdges[i] === contiguousVertex) {
      continue;
    }

    mergedRows.push(mainEdges[i]);
  }

  for (let i = 0; i < contiguousEdges.length; i++) {
    if (contiguousEdges[i] === mainVertex || contiguousEdges[i] === contiguousVertex) {
      continue;
    }

    mergedRows.push(contiguousEdges[i]);
  }


  const outComes = [] as string[][];
  for (let i = 0; i < graph.length; i++) {

    if (i === mainVertexIndex) { outComes.push(mergedRows) }
    else if (i === contiguousVertexIndex) { }
    else {
      const newRow = [];
      for (let j = 0; j < graph[i].length; j++) {
        if (graph[i][j] === mainVertex || graph[i][j] === contiguousVertex) {
          newRow.push(newName);
        } else {
          newRow.push(graph[i][j]);
        }
      }
      outComes.push(newRow);
    }
  }

  return outComes;
};


export const kargerMinCut = (origGraph: string[][], mainVertexIndex: number, contiguousVertexIndex: number) => {
  if (mainVertexIndex === contiguousVertexIndex) {
    return origGraph;
  }
  let graph = [...origGraph];
  // console.log('graph', graph);
  graph = cut(graph, mainVertexIndex, contiguousVertexIndex);
  // console.log('new state graph', graph);
  return graph;
};

export const getMinCut = (data: string[][]) => {
  let newData = kargerMinCut(data, getRandomInteger(data.length), getRandomInteger(data.length));
  while (newData.length > 2) {
    newData = kargerMinCut(newData, getRandomInteger(newData.length), getRandomInteger(newData.length));
  }
  return newData[0].length - 1;
};