import { Neuron } from '../neuron/Neuron';
import { initLayers } from './initLayers';
import { LayersConfig } from '../types';
import { educateNetwork } from './educate';
import { runTest } from './tests';

let debug = 0;

export class NeuralNetwork {
  layers: Neuron[][]

  layersConfig: LayersConfig = {
    indexLayerFirst: 0,
    indexLayerMiddle: 1,
    indexLayerLast: 2,

    countFirstLayer: 2,
    countMiddleLayer: 1,
    countLastLayer: 1,
  }

  learningRate = 0.01;

  education = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ];

  start() {
    const { layersConfig, education, learningRate } = this;

    const layers = initLayers(layersConfig);

    educateNetwork(layers, education, learningRate);

    runTest(layers, education);
  }
}
