import React from 'react';
import Button from '../Button/Button';
import { buttons } from '../../constants/constants';
import { Wrapper } from './styled';

const Buttons = () => {
  return (
    <Wrapper>
      {buttons.map(({ id, type, value }) => (
        <Button key={id} type={type} value={value}>
          {value}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Buttons;
