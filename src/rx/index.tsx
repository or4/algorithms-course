import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { RxjsSimple } from './RxjsSimple';

type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class RxJs extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/rxjs/simple`}>RxJs Simple</Link>
        </div>
        <Switch>
          <Route path="/rxjs/simple" component={RxjsSimple} />
        </Switch>
      </div>
    );
  }
}
