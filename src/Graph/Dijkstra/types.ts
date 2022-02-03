
export const MAX_VALUE = 1000000;

export type EdgeTo = {
  vertice: number;
  weight: number;
  visited: boolean;
};

export type GraphItem = {
  edges: EdgeTo[];
  value: number;
  done: boolean;
};

export type Graph = {
  [key: number]: GraphItem;
};