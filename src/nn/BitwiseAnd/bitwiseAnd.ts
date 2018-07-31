function Neuron(value) {
  
  if (!(this instanceof Neuron)) {
    return new Neuron(value);
  }
  this.value = (value !== undefined) ? value : 0;
  this.neuronsEx = [];
}
Neuron.prototype.refreshValues = function (debug) {
  
  let sum,
    i,
    len,
    item,
    subValue,
    sub;
  if (debug) { console.log('this.neuronsEx.length: ' + this.neuronsEx.length) }
  if (!this.neuronsEx.length) {
    if (debug) { console.log('1 value: ' + this.value) }
    return this.value;
  }
  sum = 0;
  for (i = 0, len = this.neuronsEx.length; i < len; i = i + 1) {
    item = this.neuronsEx[i];
    subValue = item.neuron.refreshValues(debug);
    sub = Number((item.weight * subValue).toFixed(10));
    sum = Number((sum + sub).toFixed(10));
  }
  this.value = this.sigmoid(sum);
  if (debug) { console.log('2 value: ' + this.value + ', sum: ' + sum) }
  return this.value;
};
Neuron.prototype.getResult = function () {
  
  return (this.value >= 0.5) ? 1 : 0;
};
Neuron.prototype.sigmoid = function (x, debug) {
  
  let p1 = Number((Math.exp((-1) * x)).toFixed(10)),
    p2 = Number((1 + p1).toFixed(10)),
    result = Number((1 / p2).toFixed(10));
  if (debug) { console.log('sigmoid, x: ' + x + ', sigmoid: ' + result) }
  return result;
};
Neuron.prototype.sigmoidXdx = function (aSigmoid, debug) {
  
  let p1 = Number((1 - aSigmoid).toFixed(10)),
    result = Number((aSigmoid * p1).toFixed(10));
  if (debug) { console.log('sigmoidXdx, aSigmoid: ' + aSigmoid + ', sigmoidXdx: ' + result) }
  return result;
};
Neuron.prototype.reCalcWeights = function (root, expected, learningRate, error, debug) {
  
  let xdx,
    weightsDelta,
    i,
    len,
    item,
    newWeight;

  if (!this.neuronsEx.length) {
    return 0;
  }

  if (root) {
    error = Number((this.value - expected).toFixed(10));
  }

  xdx = this.sigmoidXdx(error, debug);
  weightsDelta = Number((error * xdx).toFixed(10));

  if (debug) { console.log('weightDelta, error: ' + error + ', xdx: ' + xdx + ', weightDelta: ' + weightsDelta + ', root = ' + root) }

  for (i = 0, len = this.neuronsEx.length; i < len; i = i + 1) {
    item = this.neuronsEx[i];
    newWeight = Number((item.weight - item.neuron.value * weightsDelta * learningRate).toFixed(10));
    if (debug) { console.log('old weight: ' + item.weight + ', newWeight = ' + newWeight + ', value = ' + item.neuron.value + ', weightsDelta = ' + weightsDelta) }
    item.weight = newWeight;
  }

  for (i = 0, len = this.neuronsEx.length; i < len; i = i + 1) {
    error = Number((this.neuronsEx[i].weight * weightsDelta).toFixed(10));
    this.neuronsEx[i].neuron.reCalcWeights(0, expected, learningRate, error, debug);
  }

  return 1;
};
Neuron.prototype.show = function () {
  
  let i,
    s = '';
  for (i = 0; i < this.neuronsEx.length; i = i + 1) {
    s = s + i + ': weight: ' + this.neuronsEx[i].weight + ' (value: ' + this.neuronsEx[i].neuron.value + ') ';
  }

  if (s !== '') { console.log(s) }

  for (i = 0; i < this.neuronsEx.length; i = i + 1) {
    this.neuronsEx[i].neuron.show();
  }
};

function NeuronEx(neuron, weight) {
  
  if (!(this instanceof NeuronEx)) {
    return new NeuronEx(neuron, weight);
  }
  this.neuron = neuron;
  this.weight = (weight !== undefined) ? weight : 0;
}

export function NeuralNetwork() {
  
  if (!(this instanceof NeuralNetwork)) {
    return new NeuralNetwork();
  }
  return this;
}
NeuralNetwork.prototype.initLayers = function () {
  
  let i,
    j,
    indexLayerFirst = 0,
    indexLayerMiddle = 1,
    indexLayerLast = 2,
    countFirstLayer = 2,
    countMiddleLayer = 1;
  this.layers = [];

  // первый слой
  this.layers[indexLayerFirst] = [];
  for (i = 0; i < countFirstLayer; i = i + 1) { this.layers[indexLayerFirst][i] = new Neuron() }

  // промежуточный слой
  this.layers[indexLayerMiddle] = [];
  for (i = 0; i < countMiddleLayer; i = i + 1) {
    this.layers[indexLayerMiddle][i] = new Neuron();
    // связи с первым слоем + рандомные значения весов
    for (j = 0; j < countFirstLayer; j = j + 1) {
      this.layers[indexLayerMiddle][i].neuronsEx.push(new NeuronEx(this.layers[indexLayerFirst][j], Number(Math.random().toFixed(10))));
    }
  }

  // последний нейрон
  indexLayerLast = 2;
  this.layers[indexLayerLast] = [];
  this.layers[indexLayerLast][0] = new Neuron();
  for (j = 0; j < countMiddleLayer; j = j + 1) {
    // связи с первым слоем + рандомные значения весов
    this.layers[indexLayerLast][0].neuronsEx.push(new NeuronEx(this.layers[indexLayerMiddle][j], Number(Math.random().toFixed(10))));
  }
};
NeuralNetwork.prototype.setParams = function (p1, p2) {
  
  this.layers[0][0].value = p1;
  this.layers[0][1].value = p2;
};
NeuralNetwork.prototype.runOnce = function (education, learningRate, debug) {
  
  let root = 1,
    expected,
    error = null,
    res,
    result = 0,
    lastIndex;
  this.setParams(education[0], education[1]);

  this.layers[2][0].refreshValues(debug);
  res = this.layers[2][0].getResult();

  lastIndex = education.length - 1;
  if (res === education[lastIndex]) {
    result = 1;
  } else {
    expected = res === 1 ? 0 : 1;
    this.layers[2][0].reCalcWeights(root, expected, learningRate, error, debug);
  }

  return result;
};
NeuralNetwork.prototype.runTest = function (education, debug) {
  
  let j,
    res,
    val,
    lastIndex;
  for (j = 0; j < education.length; j = j + 1) {
    this.setParams(education[j][0], education[j][1]);
    val = this.layers[2][0].refreshValues(debug);
    res = this.layers[2][0].getResult();

    this.showNetwork();

    lastIndex = education[j].length - 1;
    if (education[j][lastIndex] === res) {
      console.log('TRUE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + res + ', val = ' + val);
    } else {
      console.log('FALSE FOR: ' + education[j][0] + ', ' + education[j][1] + ', ' + education[j][2] + ': ' + res + ', val = ' + val);
    }
  }
};
NeuralNetwork.prototype.showNetwork = function () {
  
  this.layers[2][0].show();
};
NeuralNetwork.prototype.start = function () {
  
  //debugger;
  let i = 1,
    j,
    debug = 0,
    learningRate = 0.01,
    result,
    education = [[0, 1, 0], [1, 0, 0], [0, 0, 0], [1, 1, 1]];

  this.initLayers();
  while (true) {
    result = 0;
    for (j = 0; j < education.length; j = j + 1) {
      result = result + this.runOnce(education[j], learningRate, debug);
    }
    i = i + 1;
    if (result === education.length || i === 100000) {
      break;
    }
    //console.log(i);
  }

  this.runTest(education, debug);

  console.log(i);
  console.log(result);
};