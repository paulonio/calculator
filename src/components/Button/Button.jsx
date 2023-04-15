import React from 'react';
import PropTypes from 'prop-types';

import ButtonElement from './styled';
import withClickHandler from '@hoc/withClickHandler';

const Button = ({ children, handleClick, disabled, resetError }) => {
  return (
    <ButtonElement onClick={resetError ? resetError : handleClick} disabled={disabled}>
      {children}
    </ButtonElement>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  resetError: PropTypes.func,
};

export default withClickHandler(Button);
