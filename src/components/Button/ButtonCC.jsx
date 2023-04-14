import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonElement from './styled';
import withClickHandler from '@hoc/withClickHandler';

class ButtonCC extends Component {
  render() {
    const { children, handleClick, disabled, resetError } = this.props;

    return (
      <ButtonElement onClick={resetError ? resetError : handleClick} disabled={disabled}>
        {children}
      </ButtonElement>
    );
  }
}

ButtonCC.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  resetError: PropTypes.func,
};

export default withClickHandler(ButtonCC);
