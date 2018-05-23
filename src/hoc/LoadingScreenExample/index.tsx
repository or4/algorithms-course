import React from 'react';
import Component from './Component';
import { withCenter } from './withCenter';
import { withSize } from './withSize';

type Props = {
};
type State = {
  loading: boolean;
};
class LoadingScreenExample extends React.PureComponent<Props, State> {
  state={
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, (1000));
  }
  render() {
    let height;
    const CentredComponent = withSize(withCenter(Component), height, '480px');
    return <CentredComponent loading={this.state.loading} />;
  }
}
export default LoadingScreenExample;
