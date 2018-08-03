
export type LayersConfig = {
  indexLayerFirst: number;
  indexLayerMiddle: number;
  indexLayerLast: number;

  countFirstLayer: number;
  countMiddleLayer: number;
  countLastLayer: number;
};

export type NeuralNetworkType = 'conjunction' | 'disjunction';