import { Neuron, showNeuron } from '../neuron/Neuron';
import { reCalcValues, getNeuronValue } from '../neuron/reCalcValues';

const showNetwork = (layers: Neuron[][]) => {
  showNeuron(layers[2][0]);
};

export const runTests = (layers: Neuron[][], education: number[][]) => {
  for (let j = 0; j < education.length; j = j + 1) {
    // assign data of jth case to first layer
    layers[0][0].value = education[j][0];
    layers[0][1].value = education[j][1];

    // calc last layer according with weights
    const val = reCalcValues(layers[2][0]);
    const result = getNeuronValue(layers[2][0]);

    showNetwork(layers);

    const lastIndex = education[j].length - 1;
    if (education[j][lastIndex] === result) {
      console.log('TRUE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + result + ', val = ' + val);
    } else {
      console.log('FALSE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + result + ', val = ' + val);
    }
  }
};
export const run = (layers: Neuron[][], val1: boolean, val2: boolean) => {
  // assign data of jth case to first layer
  layers[0][0].value = Number(val1);
  layers[0][1].value = Number(val2);

  // calc last layer according with weights
  reCalcValues(layers[2][0]);
  console.log('layers[2][0]', layers);
  const outcomes = getNeuronValue(layers[2][0]);
  return Boolean(outcomes);
};