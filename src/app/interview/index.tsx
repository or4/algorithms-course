import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { Column31 } from './css/Column31';
import { Column32 } from './css/Column32';
import { TextOverflowEllipsis } from './css/TextOverflowEllipsis';
import { OverflowWrap } from './css/OverflowWrap';
import { BorderGradient } from './css/BorderGradient';
import { FlexFooter } from './css/FlexFooter';
import { FlexGrid } from './css/FlexGrid';


type Props = {
};
type State = {
};

export class Interview extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="menu-container">
        <div>
          <Link to={`/interview/css/column31`}>Column31</Link>
          <Link to={`/interview/css/column32`}>Column32</Link>
          <Link to={`/interview/css/textOverflowEllipsis`}>text-overflow: ellipsis</Link>
          <Link to={`/interview/css/overflowWrap`}>overflow-wrap: break-word</Link>
          <Link to={`/interview/css/borderGradient`}>repeating-linear-gradient</Link>
          <Link to={`/interview/css/flexFooter`}>FlexFooter</Link>
          <Link to={`/interview/css/flexGrid`}>FlexGrid</Link>
        </div>

        <Switch>
          <Route path="/interview/css/column31" component={Column31} />
          <Route path="/interview/css/column32" component={Column32} />
          <Route path="/interview/css/textOverflowEllipsis" component={TextOverflowEllipsis} />
          <Route path="/interview/css/overflowWrap" component={OverflowWrap} />
          <Route path="/interview/css/borderGradient" component={BorderGradient} />
          <Route path="/interview/css/flexFooter" component={FlexFooter} />
          <Route path="/interview/css/flexGrid" component={FlexGrid} />
        </Switch>
      </div>
    );
  }
}
