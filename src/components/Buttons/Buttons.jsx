import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Flex from '../Flex/Flex';
import { buttons } from '../../constants/constants';

const StyledButtons = styled.div`
  width: 58%;
  margin-left: auto;
`;

const Buttons = (props) => {
  return (
    <StyledButtons>
      <Flex wrap="wrap" {...props}>
        {buttons.map(({ id, type, value }) => (
          <Button key={id} type={type} value={value}>
            {value}
          </Button>
        ))}
      </Flex>
    </StyledButtons>
  );
};

export default Buttons;
