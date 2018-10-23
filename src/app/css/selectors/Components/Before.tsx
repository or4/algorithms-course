import React from 'react';
import './Before.css';

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

export class Before extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <div className="css__before__container">
        <h3>Before</h3>
        <p>Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
        <p>Some long text sdfa fasdf asdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfasasdf aljkljkljkjl asdf asdf afdsdfadfas</p>
      </div>
    );
  }
}
