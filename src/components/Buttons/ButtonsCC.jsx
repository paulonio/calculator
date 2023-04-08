import React, { Component } from 'react';
import { buttons } from '../../constants/constants';
import { Wrapper } from './styled';
import ButtonCC from '../Button/ButtonCC';

class ButtonsCC extends Component {
  render() {
    const isError = this.props.isError;
    const resetError = this.props.resetError;

    return (
      <Wrapper>
        {buttons.map(({ id, type, value }) => {
          if (isError) {
            if (type === 'clear') {
              return (
                <ButtonCC key={id} type={type} value={value} onClick={resetError}>
                  {value}
                </ButtonCC>
              );
            }
            return (
              <ButtonCC key={id} disabled={isError} type={type} value={value}>
                {value}
              </ButtonCC>
            );
          }
          return (
            <ButtonCC key={id} type={type} value={value}>
              {value}
            </ButtonCC>
          );
        })}
      </Wrapper>
    );
  }
}

export default ButtonsCC;
