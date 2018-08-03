
import React from 'react';
import { withLoadingScreen } from './withLoadingScreen';
import { withItalic } from './withItalic';

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
export default withItalic(withLoadingScreen(Component));
