import React, { Component } from 'react';
import { buttons } from '../../constants/constants';
import { Wrapper } from './styled';
import ButtonCC from '../Button/ButtonCC';

class ButtonsCC extends Component {
  render() {
    return (
      <Wrapper>
        {buttons.map(({ id, type, value }) => (
          <ButtonCC key={id} type={type} value={value} handler={this.setState.bind(this)}>
            {value}
          </ButtonCC>
        ))}
      </Wrapper>
    );
  }
}

export default ButtonsCC;
