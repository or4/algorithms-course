import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { InterviewCss } from './css';
import { Add } from './Add';
import { Anagram } from './Anagram';

type Props = {
};
type State = {
};

export class Interview extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/interview/css`}>Css</Link>
          <Link to={`/interview/add`}>Add</Link>
          <Link to={`/interview/anagram`}>Anagram</Link>
        </div>

        <Switch>
          <Route path="/interview/css" component={InterviewCss} />
          <Route path="/interview/add" component={Add} />
          <Route path="/interview/anagram" component={Anagram} />
        </Switch>
      </div>
    );
  }
}
