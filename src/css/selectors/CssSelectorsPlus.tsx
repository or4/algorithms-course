import React from 'react';
import img1 from 'assets/images/1.png';
import imgGt from 'assets/images/gt.png';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

// As we see sign PLUS do only for only ONE right contiguous item And only this level
const rawClasses = {
  img: {
    display: 'none',
    height: '32px',
    width: '32px',
  },
  switch: {
    display: 'block',

    '&[type="checkbox"]:checked + img': {
      display: 'block',
    },
  },
  container: {
    display: 'block',
    '& + img': {
      display: 'block',
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

export class CssSelectorsPlus extends React.Component<Props, State> {
  state = {
  };

  render() {
    return (
      <form>
        <h3>Checkbox</h3>
        <input className={classes.switch} type="checkbox" id="switch" />

        <img className={classes.img} src={img1} alt="" />
        <img className={classes.img} src={img1} alt="" />

        <div>
          <div>
            <div>
              <img className={classes.img} src={img1} alt="" />
              <img className={classes.img} src={img1} alt="" />
              <img className={classes.img} src={img1} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.container}>
          <h3>Container</h3>
          <img className={classes.img} src={imgGt} alt="" />
          <img className={classes.img} src={imgGt} alt="" />
          <img className={classes.img} src={imgGt} alt="" />
          <img className={classes.img} src={imgGt} alt="" />

          <div>
            <h4>Sub container</h4>
            <img className={classes.img} src={imgGt} alt="" />
            <img className={classes.img} src={imgGt} alt="" />
            <img className={classes.img} src={imgGt} alt="" />
            <img className={classes.img} src={imgGt} alt="" />
          </div>
        </div>

        <h5>As we see sign PLUS do only for only ONE right contiguous item And only this level</h5>
      </form>
    );
  }
}
