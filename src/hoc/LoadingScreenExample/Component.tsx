
import React from 'react';
import { withLoadingScreen } from './Hoc';

type Props = {
};
type State = {
};
class Component extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}
export default withLoadingScreen(Component);
