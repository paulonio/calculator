import React from 'react';
import { CalculatorWrapper, HistoryWrapper, MainElement, Wrapper } from './styled';
import { Container } from '../Container/Container';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import { useSelector } from 'react-redux';

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
