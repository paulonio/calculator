import React from 'react';
import Button from '../Button/Button';
import { buttons } from '../../constants/constants';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';

const Buttons = ({ isError, resetError }) => {
  return (
    <Wrapper>
      {buttons.map(({ id, type, value }) => {
        if (isError) {
          if (type === 'clear') {
            return (
              <Button key={id} type={type} value={value} resetError={resetError}>
                {value}
              </Button>
            );
          }
          return (
            <Button key={id} disabled={isError} type={type} value={value}>
              {value}
            </Button>
          );
        }
        return (
          <Button key={id} type={type} value={value}>
            {value}
          </Button>
        );
      })}
    </Wrapper>
  );
};

Buttons.propTypes = {
  isError: PropTypes.bool,
  resetError: PropTypes.func,
};

export default Buttons;
