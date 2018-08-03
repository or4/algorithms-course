import React from 'react';

type Props = {
  loading: boolean;
};
type State = {
};

export const withCenter = (WrappedComponent: any) => {
  return class CenterScreen extends React.PureComponent<Props, State> {
    render() {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
