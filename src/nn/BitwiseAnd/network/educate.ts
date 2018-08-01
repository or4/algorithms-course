import { Neuron } from '../neuron/Neuron';
import { reCalcValues, getNeuronValue } from '../neuron/reCalcValues';
import { reCalcWeights } from '../neuron/reCalcWeights';

const educateOnce = (layers: Neuron[][], education: number[], learningRate: number) => {
  // assign data to first layer
  layers[0][0].value = education[0];
  layers[0][1].value = education[1];

  reCalcValues(layers[2][0]);
  const neuronValue = getNeuronValue(layers[2][0]);

  const expected = education[education.length - 1];

  if (neuronValue === expected) {
    return 1;
  }

  reCalcWeights(layers[2][0], expected, learningRate);
  return 0;
};

export const educateNetwork = (layers: Neuron[][], education: number[][], learningRate: number) => {
  for (let result, stopper = 0; stopper < 100000 || result === education.length; stopper++) {
    result = 0;
    // see each case (4 cases)
    for (let j = 0; j < education.length; j = j + 1) {
      result = result + educateOnce(layers, education[j], learningRate);
      console.log('education, result', result);
    }
  }

  // console.log('stopper', stopper);
  // console.log('result', result);
};