import React, { Component } from 'react';
import { MainElement, Wrapper, CalculatorWrapper } from './styled';
import { Container } from '../Container/Container';
import CalculatorCC from '../Calculator/CalculatorCC';
import HistoryCC from '../History/HistoryCC';

class MainCC extends Component {
  render() {
    return (
      <MainElement>
        <Container>
          <Wrapper>
            <CalculatorWrapper>
              <CalculatorCC />
            </CalculatorWrapper>
            <HistoryCC />
          </Wrapper>
        </Container>
      </MainElement>
    );
  }
}

export default MainCC;
