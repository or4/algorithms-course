import React from 'react';
import * as R from 'ramda';
import { timer, of } from 'rxjs';
import { Subscription } from 'rxjs/Rx';
import { catchError, switchMap, map } from 'rxjs/operators';

import { getRates } from './api';
import { Rate, Optional, ServerRate, } from './types';
import { rawClasses } from './styles';

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
  rates: Rate[];
  error: boolean;
};

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const sheet = jss.createStyleSheet(rawClasses, { link: true }).attach();
const { classes } = sheet;


const covertToArray = R.pipe(
  R.mapObjIndexed<ServerRate, Rate>(
    ({ id, last, highestBid, percentChange }, name) => ({ name, id, last, highestBid, percentChange })),
  R.values,
);

export class RxTicker extends React.Component<Props, State> {
  state = {
    rates: [] as Rate[],
    error: false,
  };
  subscription: Subscription | undefined;

  rates$ = timer(0, 1000).pipe(
    switchMap<any, Optional<Rate[]>>(_ =>
      getRates().pipe(
        map(data => covertToArray(data)),
        map<Rate[], Optional<Rate[]>>(value => ({ value })),
        catchError(error => of({ error })),
      ),
    ),
  );

  componentDidMount() {
    this.subscription = this.rates$.subscribe((optionalRates) => {
      if (optionalRates.error) {
        this.setState({ error: true });
      } else {
        this.setState({ rates: optionalRates.value, error: false });
      }
    });
  }
  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    return (
      <div>
        <div className={classes.container}>
          <div className={[classes.rowBase, classes.rowHheader].join(' ')}>
            <div>{'id'}</div>
            <div>{'name'}</div>
            <div>{'highestBid'}</div>
            <div>{'last'}</div>
            <div>{'percentChange'}</div>
          </div>
          {this.state.rates.map((item) => (
            <div key={item.id} className={[classes.rowBase, classes.row].join(' ')}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.highestBid}</div>
              <div>{item.last}</div>
              <div>{item.percentChange}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
