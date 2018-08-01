import { Neuron, NeuronEx } from '../neuron/Neuron';
import { LayersConfig } from '../types';

let debug = false;

const initFirstLayer = (layersConfig: LayersConfig, layers: Neuron[][]) => {
  const { indexLayerFirst, countFirstLayer } = layersConfig;
  layers[indexLayerFirst] = [];
  for (let i = 0; i < countFirstLayer; i++) {
    layers[indexLayerFirst][i] = new Neuron();
  }
};

const initHiddenLayer = (layersConfig: LayersConfig, layers: Neuron[][]) => {
  const { indexLayerMiddle, countMiddleLayer, indexLayerFirst, countFirstLayer, } = layersConfig;
  layers[indexLayerMiddle] = [];
  for (let i = 0; i < countMiddleLayer; i++) {
    layers[indexLayerMiddle][i] = new Neuron();
    // связи с первым слоем + рандомные значения весов
    for (let j = 0; j < countFirstLayer; j = j + 1) {
      layers[indexLayerMiddle][i].neuronsEx.push(new NeuronEx(layers[indexLayerFirst][j], Number(Math.random().toFixed(10))));
    }
  }
};

const initLastLayer = (layersConfig: LayersConfig, layers: Neuron[][]) => {
  const { indexLayerLast, countLastLayer, indexLayerMiddle, countMiddleLayer } = layersConfig;
  layers[indexLayerLast] = [];

  for (let i = 0; i < countLastLayer; i++) {
    layers[indexLayerLast][i] = new Neuron();
    // связи с первым слоем + рандомные значения весов
    for (let j = 0; j < countMiddleLayer; j = j + 1) {
      layers[indexLayerLast][0].neuronsEx.push(new NeuronEx(layers[indexLayerMiddle][j], Number(Math.random().toFixed(10))));
    }
  }
};

export const initLayers = (layersConfig: LayersConfig) => {
  const layers = [] as Neuron[][];

  initFirstLayer(layersConfig, layers);
  initHiddenLayer(layersConfig, layers);
  initLastLayer(layersConfig, layers);

  debug && console.log('layers INITED', layers);
  return layers;
};