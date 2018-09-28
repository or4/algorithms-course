import React from 'react';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

const rawClasses = {
  container: {
    height: 'calc(100vh - 200px)',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    // border: '1px solid',
    /* Главная секция заполнит все свободное место на странице, которое не занял футер */
    flex: '1 0 auto', // flex-grow 1, flex-shrink 0, flex-basis auto
  },
  footer: {
    background: 'aqua',
    // border: '1px solid',
    /* Футер заполнит столько вертикального пространства, сколько ему будет нужно, ни пикселем больше */
    flex: '0 0 auto', // flex-grow 0, flex-shrink 0, flex-basis auto
  },
};

const { classes } = jss.createStyleSheet(rawClasses as any).attach();

type Props = {
};
type State = {
};

export class FlexFooter extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div className={classes.container}>
          <h3>FlexFooter</h3>
          <div className={classes.main}>
          Lorem dolor sit amet, consecasdfasasfadstetur dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo?
          </div>
        </div>
        <div className={classes.footer}>
          Footer
        </div>
      </div>
    );
  }
}
