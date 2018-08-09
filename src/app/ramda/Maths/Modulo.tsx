import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

const modulo = R.pipe(
  R.modulo
);

const mathMod = R.pipe(
  R.mathMod
);

export class Modulo extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>R.modulo</h3>
        <h3>Result '-5'%3: {modulo('-5' as any)(3)}</h3>
        <h3>Result -5%3: {String(R.modulo(-5)(3))}</h3>
        <h3>Result -4%3: {String(R.modulo(-4)(3))}</h3>
        <h3>Result -3%3: {String(R.modulo(-3)(3))}</h3>
        <h3>Result 5%3: {String(R.modulo(5)(3))}</h3>
        <h3>Result 4%3: {String(R.modulo(4)(3))}</h3>
        <h3>Result 3%3: {String(R.modulo(3)(3))}</h3>
        <h3>Result '0.5'%3: {modulo('0.5' as any)(3)}</h3>
        <h3>Result 0.5%3: {String(R.modulo(0.5)(3))}</h3>

        <h3>R.mathMod</h3>
        <h3>Result '-5'%3: {mathMod('-5' as any)(3)}</h3>
        <h3>Result -5%3: {String(R.mathMod(-5)(3))}</h3>
        <h3>Result -4%3: {String(R.mathMod(-4)(3))}</h3>
        <h3>Result -3%3: {String(R.mathMod(-3)(3))}</h3>
        <h3>Result 5%3: {String(R.mathMod(5)(3))}</h3>
        <h3>Result 4%3: {String(R.mathMod(4)(3))}</h3>
        <h3>Result 3%3: {String(R.mathMod(3)(3))}</h3>
        <h3>Result '0.5'%3: {mathMod('0.5' as any)(3)}</h3>
        <h3>Result 0.5%3: {String(R.mathMod(0.5)(3))}</h3>
      </div>
    );
  }
}
