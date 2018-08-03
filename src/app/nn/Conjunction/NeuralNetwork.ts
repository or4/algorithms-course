/**
 * It was made by video https://www.youtube.com/watch?v=HA-F6cZPvrg
 */
import { initLayers } from './network/initLayers';
import { educateNetwork } from './network/educate';
import { runTests, run } from './network/tests';

import { Neuron } from './neuron/Neuron';
import { LayersConfig, NeuralNetworkType } from './types';

export class NeuralNetwork {
  type: NeuralNetworkType
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

  educationConjunction = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ];
  educationDisjunction = [
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 0],
    [1, 1, 1]
  ];

  constructor(type: NeuralNetworkType) {
    this.type = type;
    this.layers = initLayers(this.layersConfig);
    this.educate();
    this.runTests();
  }

  educate() {
    const { layers, learningRate, type } = this;
    const education = type === 'conjunction' ? this.educationConjunction : this.educationDisjunction;
    educateNetwork(layers, education, learningRate);
  }

  run(val1: boolean, val2: boolean) {
    const { layers } = this;
    return run(layers, val1, val2);
  }

  runTests() {
    const { layers, type } = this;
    const education = type === 'conjunction' ? this.educationConjunction : this.educationDisjunction;
    runTests(layers, education);
  }
}
