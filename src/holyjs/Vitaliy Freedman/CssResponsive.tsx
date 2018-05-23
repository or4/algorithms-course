import React from 'react';

type Props = {
};
type State = {
};

class CssResponsive extends React.PureComponent<Props, State> {
  getStyle() {
    const container = {
      width: '100%',
      overflow: 'hidden',
      height: 'calc(100vh)',
    };
    const box = {
      display: 'inline-block',
      minWidth: '50%',
      maxWidth: '100%',
      width: 'calc((600px - 100%) * 300)',
      height: '150px',
      boxSizing: 'border-box' as 'border-box',
    };
    return {
      container,
      box
    };
  }
  render() {
    const style = this.getStyle();

    return (
      <div style={style.container}>
        <h3>CSS responsive without media queries</h3>
        <div style={style.box}>test-1</div><div style={style.box}>test-2</div><div style={style.box}>test-3</div><div style={style.box}>test-4</div>
      </div>
    );
  }
}
export default CssResponsive;
