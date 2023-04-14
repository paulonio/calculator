import React from 'react';
import PropTypes from 'prop-types';

import { BUTTONS } from '@constants/constants';

import Button from '@components/Button/Button';

import Wrapper from './styled';

const Buttons = ({ isError, resetError }) => {
  const buttons = BUTTONS.map(({ type, value }) => {
    if (isError) {
      if (type === 'clear') {
        return (
          <Button key={value} type={type} value={value} resetError={resetError}>
            {value}
          </Button>
        );
      }
      return (
        <Button key={value} disabled={isError} type={type} value={value}>
          {value}
        </Button>
      );
    }
    return (
      <Button key={value} type={type} value={value}>
        {value}
      </Button>
    );
  });

  return <Wrapper>{buttons}</Wrapper>;
};

Buttons.propTypes = {
  isError: PropTypes.bool,
  resetError: PropTypes.func,
};

export default Buttons;
