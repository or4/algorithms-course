import React from 'react';

type Props = {
  onToggle: (value: boolean) => void;
};
type State = {
  on: boolean;
};

function ToggleOn({ on, children, someprops }:any) {
  return on ? <div> {someprops} {children} </div> : null;
}
function ToggleOff({ off, children }:any) {
  return off ? <div> {children} </div> : null;
}
function ToggleButton({ on, toggle, ...props } :any) {
  return (
    <button onClick={toggle} {...props} >
      {`on ${on}`}
    </button>
  );
}

class Toggle extends React.PureComponent<Props, State> {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  state = { on: false }

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }), () => this.props.onToggle(this.state.on));
  }

  render() {
    const children = React.Children.map(
      this.props.children,
      (child: any) =>
        React.cloneElement(child, {
          on: this.state.on,
          off: !this.state.on,
          toggle: this.toggle,
        }),
    );
    return <div>{children}</div>;
  }
}


function Ex2() {
  const f = (on: any) => console.log('toggle', on);
  return (
    <Toggle onToggle={f} >
      <Toggle.On someprops={'someprops'} >The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

export default Ex2;
