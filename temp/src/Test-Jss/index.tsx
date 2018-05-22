import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
// import color from 'color';

jss.setup(preset());

class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const styles = this.getStyles({ fontSize: 14, width: 250 });

    const sheet = jss.createStyleSheet(styles, { link: true }).attach();
    const { classes } = sheet;

    this.state = {
      classes,
      sheet,
      fontSize: 12,
    };
  }
  onClick = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  }
  getStyles = (props: any) => ({
    button: {
      fontSize: props.fontSize,
      width: props.width,
      background: '#38BF4F',
      '&:hover': {
        background: 'blue'
      }
    }
  })
  render() {
    console.log('test render', this.state.classes);
    this.state.sheet.getRule('button').prop('fontSize', this.state.fontSize);

    return (
      <button onClick={this.onClick} className={this.state.classes.button} >styled example</button>
    );
  }
}

export default Test;

