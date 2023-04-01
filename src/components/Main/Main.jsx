import React from 'react';
import { CalculatorWrapper, HistoryWrapper, MainElement, Wrapper } from './styled';
import { Container } from '../Container/Container';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

const Main = () => {
  return (
    <MainElement>
      <Container>
        <Wrapper>
          <CalculatorWrapper>
            <Calculator />
          </CalculatorWrapper>
          <History />
        </Wrapper>
      </Container>
    </MainElement>
  );
};

export default Main;
