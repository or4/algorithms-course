// обычный факториал
function fact(n: number) {
  let value = 1;
  for (let i = n; i >= 1; i--) {
    value = value * i;
  }
  return value;
}
// частное двух факториалов
// 2048! / 2036! = 2048 * 2047 * 2046 * ... * 2037
function factDiff(n: number, times: number) {
  let value = 1;
  for (let i = n, count = 0; count < times; count++, i--) {
    value = value * i;
  }
  return value;
}

// количество перестановок n! ~ 2048!
function P(n: number) {
  return fact(n);
}

// количество размещений n! / ( (n - m)! * m!) ~ 2048! / 2036!
function A(n: number, m: number) {
  return factDiff(n, m);
}

// количество сочетаний n! / ( (n - m)! * m!) ~ 2048! / (2036! * 12!)
function C(n: number, m: number) {
  return factDiff(n, m) / fact(m);
}

// Amn = Cmn * Pm

console.log(factDiff(2048, 12));
