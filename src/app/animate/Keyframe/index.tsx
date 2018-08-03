import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  '@keyframes animation': {
    '0%': {
      opacity: 0.4 as any,
    },
    '50%': {
      opacity: 1 as any,
    },
    '100%': {
      opacity: 0.4 as any,
    }
  },
  div: {
    width: '100px',
    height: '100px',
    background: 'rgba(55,155,155, 1)',
    position: 'relative' as any,
    animation: 'animation 2s infinite' as any,
  }
};

const { classes } = jss.createStyleSheet(rawClasses as any).attach();

type StateProps = {
};
type DispatchProps = {
};
type Props = StateProps & DispatchProps;

type State = {
};

export class Keyframe extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h3>Simple keyframe with jss</h3>

        <div className={classes.div} />
      </div>
    );
  }
}
