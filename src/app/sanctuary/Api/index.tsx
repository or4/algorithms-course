import React from 'react';
import * as R from 'ramda';
import { Map, fromJS, List } from 'immutable';
import { objToString } from '../../ramda/helpers';
import { create, env } from 'sanctuary';

import axios, { AxiosPromise } from 'axios';

const S = create({
  checkTypes: true,
  env: env,
});


type Props = {
};
type State = {
};

const userUrl = 'https://api.github.com/users/or4';

const simpleRequest = async (url: string) => {
  let name = '';
  try {
    const { data } = await axios.get(url);
    name = data && data.name || 'Sorry, name is empty';
  } catch (error) {
    name = 'Sorry, network error';
  }
  console.log('simpleRequest, data', name);
};

const simpleSanctuaryRequest = async (url: string) => {
  let name = '';
  try {
    name = await R.pipeP(
      axios.get,
      S.gets(R.is(String))(['data', 'name']) as any,
      S.maybeToEither('Sorry, name is empty') as any,
      R.prop('value'),
    )(url) as any;

  } catch (error) {
    name = 'Sorry, network error';
  }

  console.log('simpleSanctuaryRequest, data', name);
};



export class Api extends React.PureComponent<Props, State> {
  async componentDidMount() {
    // await simpleRequest(userUrl);
    // await simpleSanctuaryRequest(userUrl);
    console.log(
      (S.Left('Cannot divide by zero') as any).value
    );
  }

  render() {
    return (
      <div>
        <h3>Work with api</h3>

      </div>
    );
  }
}
