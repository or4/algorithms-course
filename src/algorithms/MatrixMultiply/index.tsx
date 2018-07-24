import React from 'react';

type Props = {
};
type State = {
};

const style = {
  container: {
    alignItems: 'center' as 'center',
    display: 'flex',
    marginBottom: '20px',
  },
  cell: {
    padding: '0 5px',
  },
  sign: {
    height: '5px',
    padding: '0 5px',
  }
};

export class MatrixMultiply extends React.PureComponent<Props, State> {
  onListChange = (list: string) => {
    console.log('onChange list', list);
    this.setState({ list, });
  }
  render() {
    return (
      <div>
        <div style={style.container}>
          <div style={style.cell}>
            <div>a, b</div>
            <div>c, d</div>
          </div>
          <div style={style.sign}>*</div>
          <div style={style.cell}>
            <div>e, f</div>
            <div>g, h</div>
          </div>

          <div style={style.cell}>=</div>

          <div style={style.cell}>
            <div>ae + bg, af + bh</div>
            <div>ce + dg, cf + dh</div>
          </div>
        </div>

        <div style={style.container}>
          <div style={style.cell}>
            <div>1, -2</div>
            <div>2, 0</div>
          </div>
          <div style={style.sign}>*</div>
          <div style={style.cell}>
            <div>-3, -2</div>
            <div>2, -4</div>
          </div>

          <div style={style.cell}>=</div>
          <div style={style.cell}>
            <div>1 * -3 + -2 * 2, 1 * (-2) + -2 * -4</div>
            <div>2 * -3 + 0 * 2, 2 * -2 + 0 * -4</div>
          </div>

          <div style={style.cell}>=</div>
          <div style={style.cell}>
            <div>{1 * Number(-3)} + {-2 * 2}, {1 * Number(-2)} + {-2 * -4}</div>
            <div>{2 * -3} + {0 * 2}, {2 * -2} + {0 * -4}</div>
          </div>

          <div style={style.cell}>=</div>
          <div style={style.cell}>
            <div>{1 * Number(-3) + -2 * 2}, {1 * Number(-2) + -2 * -4}</div>
            <div>{2 * -3 + 0 * 2}, {2 * -2 + 0 * -4}</div>
          </div>
        </div>

      </div>
    );
  }
}
