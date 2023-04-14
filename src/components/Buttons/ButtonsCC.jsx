import React, { Component } from 'react';

import { BUTTONS } from '@constants/constants';

import ButtonCC from '@components/Button/ButtonCC';

import Wrapper from './styled';

class ButtonsCC extends Component {
  render() {
    const isError = this.props.isError;
    const resetError = this.props.resetError;

    const buttons = BUTTONS.map(({ type, value }) => {
      if (isError) {
        if (type === 'clear') {
          return (
            <ButtonCC key={value} type={type} value={value} resetError={resetError}>
              {value}
            </ButtonCC>
          );
        }
        return (
          <ButtonCC key={value} disabled={isError} type={type} value={value}>
            {value}
          </ButtonCC>
        );
      }
      return (
        <ButtonCC key={value} type={type} value={value}>
          {value}
        </ButtonCC>
      );
    });

    return <Wrapper>{buttons}</Wrapper>;
  }
}

export default ButtonsCC;
