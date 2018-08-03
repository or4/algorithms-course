import React from 'react';

type Props = {
  loading: boolean;
};
type State = {
};

export const withItalic = (WrappedComponent: any) => {
  return class ItalicScreen extends React.PureComponent<Props, State> {
    render() {
      return (
        <div style={{ fontStyle: 'italic' }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
