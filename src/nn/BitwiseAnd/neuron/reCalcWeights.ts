import { Neuron } from './Neuron';

let debug = 0;

const sigmoidXdx = (sigmoid: number) => {
  let p1 = Number((1 - sigmoid).toFixed(10));
  let result = Number((sigmoid * p1).toFixed(10));
  debug && console.log('sigmoidXdx, sigmoid: ' + sigmoid + ', sigmoidXdx: ' + result);
  return result;
};

export const reCalcWeights = (neuron: Neuron, expected: number, learningRate: number, correction?: number) => {
  if (!neuron.neuronsEx.length) {
    return 0;
  }

  let correctionModified = typeof correction !== 'undefined' ? correction : Number((neuron.value - expected).toFixed(10));

  const xdx = sigmoidXdx(correctionModified);
  const weightsDelta = Number((correctionModified * xdx).toFixed(10));

  debug && console.log('weightDelta, correction: ' + correctionModified + ', xdx: ' + xdx + ', weightDelta: ' + weightsDelta);

  for (let i = 0; i < neuron.neuronsEx.length; i++) {
    const item = neuron.neuronsEx[i];
    const newWeight = Number((item.weight - item.neuron.value * weightsDelta * learningRate).toFixed(10));
    debug && console.log('old weight: ' + item.weight + ', newWeight = ' + newWeight + ', value = ' + item.neuron.value + ', weightsDelta = ' + weightsDelta);
    item.weight = newWeight;
  }

  for (let i = 0; i < neuron.neuronsEx.length; i++) {
    correctionModified = Number((neuron.neuronsEx[i].weight * weightsDelta).toFixed(10));
    reCalcWeights(neuron.neuronsEx[i].neuron, expected, learningRate, correctionModified);
  }
  return 1;
};