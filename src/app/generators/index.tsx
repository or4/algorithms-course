import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { SimpleGenerator } from './SimpleGenerator';
import { mapLimit } from './mapLimit';

type Props = {
};
type State = {
};

mapLimit([
  'http1',
  'http2',
  'http3',
  'http4',
  'http5'
], 3).then((res) => {
  console.log('maplimit: ', res);
});



export class Generators extends React.PureComponent<Props, State> {
  render() {


    return (
      <div className="menu-container">
        <div>
          <Link to={`/generators`}>Simple</Link>
        </div>
        <Switch>
          <Route path="/generators" component={SimpleGenerator} />
        </Switch>
      </div>
    );
  }
}
