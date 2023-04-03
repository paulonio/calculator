import React, { Component } from 'react';
import { ButtonElement } from './styled';

class ButtonCC extends Component {
  render() {
    return <ButtonElement {...this.props}>{this.props.children}</ButtonElement>;
  }
}

export default ButtonCC;
