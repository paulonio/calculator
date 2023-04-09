import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '@components/Container/Container';
import Calculator from '@components/Calculator/Calculator';
import History from '@components/History/History';

import { CalculatorWrapper, MainElement, Wrapper } from './styled';

const Main = () => {
  const showHistory = useSelector((state) => state.history.showHistory);

  return (
    <MainElement>
      <Container>
        <Wrapper>
          <CalculatorWrapper>
            <Calculator />
          </CalculatorWrapper>
          {showHistory && <History />}
        </Wrapper>
      </Container>
    </MainElement>
  );
};

export default Main;
