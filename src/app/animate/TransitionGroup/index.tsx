import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import jss from 'jss';
import preset from 'jss-preset-default';
import { Button } from 'app/ui/Button';
jss.setup(preset());

const rawClasses = {

};

const { classes } = jss.createStyleSheet(rawClasses as any).attach();

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
  items: string[];
};

export class TransitionGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text') as any
    ]);
    this.setState({ items: newItems });
  }

  handleRemove(index: number) {
    let newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, index) => (
      <div key={item} onClick={() => this.handleRemove(index)}>
        {item}
      </div>
    ));

    return (
      <div>
        <h3>ReactCSSTransitionGroup</h3>
        <h5><a href="https://reactjs.org/docs/animation.html" target="_blank">https://reactjs.org/docs/animation.html</a></h5>
        <Button onClick={this.handleAdd}>Add Item</Button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={2500}
          transitionAppear={true}
          transitionAppearTimeout={2500}
          transitionEnter={true}
          transitionLeave={true}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
