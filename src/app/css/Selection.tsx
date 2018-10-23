import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

// As we see sign GT do only for SUB children And only ONE level
const rawClasses = {
  container: {
    display: 'block',
    maxWidth: '600px',
    fontSize: '16px',
    fontWeight: '300' as any,

    '& > p::selection': {
      color: 'white',
      fontSize: '26px',
      fontWeight: 'bold',
      background: 'red'
    }
  },
};

const { classes } = jss.createStyleSheet(rawClasses).attach();

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

export class Selection extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <div className={classes.container}>
        <h3>Selection - can change only color and background-color</h3>
        <p>Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
        <p>Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
      </div>
    );
  }
}
