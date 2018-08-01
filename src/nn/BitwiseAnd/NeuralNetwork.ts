import { Neuron } from './Neuron';
import { initLayers } from './initLayers';
import { LayersConfig } from './types';

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

  initLayers() {
    this.layers = initLayers(this.layersConfig);
  }

  setParams(p1: number, p2: number) {
    this.layers[0][0].value = p1;
    this.layers[0][1].value = p2;
  }

  runOnce(education: number[], learningRate: number) {
    this.setParams(education[0], education[1]);

    this.layers[2][0].refreshValues();
    const res = this.layers[2][0].getResult();

    const lastIndex = education.length - 1;
    if (res === education[lastIndex]) {
      return 1;
    }

    const expected = res === 1 ? 0 : 1;
    this.layers[2][0].reCalcWeights(expected, learningRate);
    return 0;
  }

  runTest(education: number[][]) {
    for (let j = 0; j < education.length; j = j + 1) {
      this.setParams(education[j][0], education[j][1]);
      const val = this.layers[2][0].refreshValues();
      const res = this.layers[2][0].getResult();

      this.showNetwork();

      const lastIndex = education[j].length - 1;
      if (education[j][lastIndex] === res) {
        console.log('TRUE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + res + ', val = ' + val);
      } else {
        console.log('FALSE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + res + ', val = ' + val);
      }
    }
  }

  showNetwork() {
    this.layers[2][0].show();
  }

  start() {
    this.initLayers();

    // let result;
    // let stopper;
    // for (stopper = 0; stopper < 100000 || result === this.education.length; stopper++) {
    //   result = 0;
    //   for (let j = 0; j < this.education.length; j = j + 1) {
    //     result = result + this.runOnce(this.education[j], this.learningRate);
    //   }
    // }

    // this.runTest(this.education);

    // console.log('stopper', stopper);
    // console.log('result', result);
  }
}
