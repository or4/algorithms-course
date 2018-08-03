import React from 'react';

type Props = {
  loading: boolean;
};
type State = {
};

export const withSize = (WrappedComponent: any, height?: string, width?: string) => {
  return class CenterScreen extends React.PureComponent<Props, State> {
    render() {
      const style = {};
      if (typeof height !== 'undefined') { Object.assign(style, { height }) }
      if (typeof width !== 'undefined') { Object.assign(style, { width }) }
      return (
        <div style={style}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
