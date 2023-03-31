import React from 'react';
import { CalculatorWrapper, HistoryWrapper, MainElement, Wrapper } from './styled';
import { Container } from '../Container/Container';
import Calculator from '../Calculator/Calculator';

const Main = () => {
  return (
    <MainElement>
      <Container>
        <Wrapper>
          <CalculatorWrapper>
            <Calculator />
          </CalculatorWrapper>
          <HistoryWrapper>I am History</HistoryWrapper>
        </Wrapper>
      </Container>
    </MainElement>
  );
};

export default Main;
