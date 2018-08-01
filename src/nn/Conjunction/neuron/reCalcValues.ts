import { Neuron } from './Neuron';

const debug = false;

const sigmoid = (x: number) => {
  let p1 = Number((Math.exp((-1) * x)).toFixed(10));
  let p2 = Number((1 + p1).toFixed(10));
  let result = Number((1 / p2).toFixed(10));
  debug && console.log('sigmoid, x: ' + x + ', sigmoid: ' + result);
  return result;
};

/**
   * Calc value Neuron according with Neurons in other layers
   */
export const reCalcValues = (neuron: Neuron) => {
  debug && console.log('this.neuronsEx.length: ' + neuron.neuronsEx.length);

  if (!neuron.neuronsEx.length) {
    debug && console.log('only value: ' + neuron.value);
    return neuron.value;
  }

  let sum = 0;
  for (let i = 0; i < neuron.neuronsEx.length; i++) {
    const item = neuron.neuronsEx[i];
    const subValue = reCalcValues(item.neuron);
    const sub = Number((item.weight * subValue).toFixed(10));
    sum = Number((sum + sub).toFixed(10));
  }

  neuron.value = sigmoid(sum);
  debug && console.log('2 value: ' + neuron.value + ', sum: ' + sum);
  return neuron.value;
};

export const getNeuronValue = (neuron: Neuron) => {
  return (neuron.value >= 0.5) ? 1 : 0;
};
