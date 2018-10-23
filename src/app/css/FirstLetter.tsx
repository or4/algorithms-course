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

    '& > p::first-letter': {
      color: 'red',
      fontSize: '26px',
      fontWeight: 'bold',
    },
    '& > .test-line::first-line': {
      color: 'green',
      fontSize: '16px',
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

export class FirstLetter extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <div className={classes.container}>
        <h3>FirstLetter</h3>
        <p>Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
        <p className="test-line">Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
      </div>
    );
  }
}
