import React from 'react';
import { Button } from 'app/ui/Button';

type Props = {
  onToggle: (value: boolean) => void;
};
type State = {
  on: boolean;
};

function ToggleOn({ on, children, someprops }:any) {
  return on ? <div style={{ marginBottom: '10px' }}> {children}, {someprops} </div> : null;
}
function ToggleOff({ off, children }:any) {
  return off ? <div style={{ marginBottom: '10px' }}> {children} </div> : null;
}
function ToggleButton({ on, toggle, ...props } :any) {
  return (
    <Button onClick={toggle} {...props} >
      {`on ${on}`}
    </Button>
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


export function Children() {
  const f = (on: any) => console.log('toggle', on);
  return (
    <div>
      <h3>React Children like Toggle.On</h3>
      <Toggle onToggle={f} >
        <Toggle.On someprops={'someprops'} >The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
}
