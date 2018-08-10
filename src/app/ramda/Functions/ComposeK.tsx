import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class ComposeK extends React.PureComponent<Props, State> {
  render() {

    // //  get :: String -> Object -> Maybe *
    // const get = R.curry((propName, obj) => Maybe(obj[propName]));

    // //  getStateCode :: Maybe String -> Maybe String
    // const getStateCode = R.composeK(
    //   R.compose(Maybe.of, R.toUpper),
    //   get('state'),
    //   get('address'),
    //   get('user'),
    // );
    // getStateCode({ 'user': { 'address': { 'state': 'ny' }}}); //=> Maybe.Just("NY")
    // getStateCode({}); //=> Maybe.Nothing()

    const classyGreeting = (firstName: string, lastName: string) => "The name's " + lastName + ', ' + firstName + ' ' + lastName;
    return (
      <div>
        <h3>Compose</h3>

      </div>
    );
  }
}
