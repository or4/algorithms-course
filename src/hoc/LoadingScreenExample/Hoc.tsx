import React from 'react';

type Props = {
  loading: boolean;
};
type State = {
};

export const withLoadingScreen = (WrappedComponent: any) => {
  return class LoadingScreen extends React.PureComponent<Props, State> {
    render() {
      if (this.props.loading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};
