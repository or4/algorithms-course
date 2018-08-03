import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { LoadingScreenExample } from 'hoc/LoadingScreenExample';


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

export class Hoc extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/hoc`}>hoc with</Link>
        </div>
        <Switch>
          <Route path="/hoc" component={LoadingScreenExample} />
        </Switch>
      </div>
    );
  }
}
