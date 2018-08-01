import { Neuron } from '../neuron/Neuron';
import { reCalcValues, getNeuronValue } from '../neuron/reCalcValues';
import { reCalcWeights } from '../neuron/reCalcWeights';
import { NeuralNetworkType } from '../types';

const educateCase = (layers: Neuron[][], education: number[], learningRate: number) => {
  // assign data to first layer
  layers[0][0].value = education[0];
  layers[0][1].value = education[1];

  // recalculate values according with neurones in other layers
  reCalcValues(layers[2][0]);
  const neuronValue = getNeuronValue(layers[2][0]);

  const expected = education[education.length - 1];
  if (neuronValue === expected) {
    return 1;
  }

  // if neuron value doesn't correspond expected then recalculate weights
  reCalcWeights(layers[2][0], expected, learningRate);
  return 0;
};

export const educateNetwork = (layers: Neuron[][], education: number[][], learningRate: number) => {
  let stopper = 0;
  for (let result; stopper < 1000 && result !== education.length; stopper++) {
    result = 0; // drop counter
    // see each case (4 cases)
    for (let j = 0; j < education.length; j = j + 1) {
      // when counter eq education length, then all cases right
      result += educateCase(layers, education[j], learningRate);
    }
  }

  console.log('stopper', stopper);
};