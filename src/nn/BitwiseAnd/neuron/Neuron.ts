let debug = 0;

export class Neuron {
  value: number
  neuronsEx: NeuronEx[]

  constructor() {
    this.value = 0;
    this.neuronsEx = [];
  }
}

export class NeuronEx {
  constructor(public neuron: Neuron, public weight: number) { }
}

/** helpers */

export function showNeuron(neuron: Neuron) {
  let outcomes = '';
  for (let i = 0; i < neuron.neuronsEx.length; i++) {
    outcomes = outcomes + i + ': weight: ' + neuron.neuronsEx[i].weight + ' (value: ' + neuron.neuronsEx[i].neuron.value + ') ';
  }
  if (outcomes !== '') { console.log(outcomes) }

  for (let i = 0; i < neuron.neuronsEx.length; i++) {
    showNeuron(neuron.neuronsEx[i].neuron);
  }
}
