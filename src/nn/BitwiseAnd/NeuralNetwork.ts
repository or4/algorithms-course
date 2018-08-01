/**
 * It was made by video https://www.youtube.com/watch?v=HA-F6cZPvrg
 */
import { initLayers } from './network/initLayers';
import { educateNetwork } from './network/educate';
import { runTests, run } from './network/tests';

import { Neuron } from './neuron/Neuron';
import { LayersConfig } from './types';

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

  learningRate = 0.05;

  education = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ];

  constructor() {
    this.layers = initLayers(this.layersConfig);
    this.educate();
    this.runTests();
  }

  educate() {
    const { layers, education, learningRate } = this;
    educateNetwork(layers, education, learningRate);
  }

  run(val1: boolean, val2: boolean) {
    const { layers } = this;
    return run(layers, val1, val2);
  }
  runTests() {
    const { layers, education } = this;
    runTests(layers, education);
  }
}
