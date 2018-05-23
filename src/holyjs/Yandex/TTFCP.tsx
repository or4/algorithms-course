import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class TTFCP extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
    };
    return {
      container,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.container}>
        TTFCP
      </div>
    );
  }
}
export default TTFCP;
