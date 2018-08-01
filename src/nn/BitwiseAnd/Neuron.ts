let debug = 0;

export class Neuron {
  value: any
  neuronsEx: any

  constructor() {
    this.value = 0;
    this.neuronsEx = [];
  }

  sigmoid(x: number) {
    let p1 = Number((Math.exp((-1) * x)).toFixed(10));
    let p2 = Number((1 + p1).toFixed(10));
    let result = Number((1 / p2).toFixed(10));
    debug && console.log('sigmoid, x: ' + x + ', sigmoid: ' + result);
    return result;
  }

  sigmoidXdx(aSigmoid: number) {
    let p1 = Number((1 - aSigmoid).toFixed(10));
    let result = Number((aSigmoid * p1).toFixed(10));
    debug && console.log('sigmoidXdx, aSigmoid: ' + aSigmoid + ', sigmoidXdx: ' + result);
    return result;
  }

  refreshValues() {
    debug && console.log('this.neuronsEx.length: ' + this.neuronsEx.length);

    if (!this.neuronsEx.length) {
      debug && console.log('1 value: ' + this.value);
      return this.value;
    }

    let sum = 0;
    for (let i = 0; i < this.neuronsEx.length; i++) {
      const item = this.neuronsEx[i];
      const subValue = item.neuron.refreshValues();
      const sub = Number((item.weight * subValue).toFixed(10));
      sum = Number((sum + sub).toFixed(10));
    }

    this.value = this.sigmoid(sum);
    debug && console.log('2 value: ' + this.value + ', sum: ' + sum);
    return this.value;
  }

  getResult() {
    return (this.value >= 0.5) ? 1 : 0;
  }

  reCalcWeights(expected: number, learningRate: number, correction?: number) {
    if (!this.neuronsEx.length) {
      return 0;
    }

    let correctionModified = typeof correction !== 'undefined' ? correction : Number((this.value - expected).toFixed(10));

    const xdx = this.sigmoidXdx(correctionModified);
    const weightsDelta = Number((correctionModified * xdx).toFixed(10));

    debug && console.log('weightDelta, correction: ' + correctionModified + ', xdx: ' + xdx + ', weightDelta: ' + weightsDelta);

    for (let i = 0; i < this.neuronsEx.length; i++) {
      const item = this.neuronsEx[i];
      const newWeight = Number((item.weight - item.neuron.value * weightsDelta * learningRate).toFixed(10));
      debug && console.log('old weight: ' + item.weight + ', newWeight = ' + newWeight + ', value = ' + item.neuron.value + ', weightsDelta = ' + weightsDelta);
      item.weight = newWeight;
    }

    for (let i = 0; i < this.neuronsEx.length; i++) {
      correctionModified = Number((this.neuronsEx[i].weight * weightsDelta).toFixed(10));
      this.neuronsEx[i].neuron.reCalcWeights(0, expected, learningRate, correctionModified);
    }
    return 1;
  }

  show() {
    let outcomes = '';
    for (let i = 0; i < this.neuronsEx.length; i++) {
      outcomes = outcomes + i + ': weight: ' + this.neuronsEx[i].weight + ' (value: ' + this.neuronsEx[i].neuron.value + ') ';
    }
    if (outcomes !== '') { console.log(outcomes) }

    for (let i = 0; i < this.neuronsEx.length; i++) {
      this.neuronsEx[i].neuron.show();
    }
  }
}

export class NeuronEx {
  constructor(public neuron: Neuron, public weight: number) { }
}