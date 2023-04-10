import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '@components/Container/Container';
import CalculatorCC from '@components/Calculator/CalculatorCC';
import HistoryCC from '@components/History/HistoryCC';

import { MainElement, Wrapper, CalculatorWrapper } from './styled';

class MainCC extends Component {
  render() {
    const showHistory = this.props.showHistory;

    return (
      <MainElement>
        <Container>
          <Wrapper>
            <CalculatorWrapper>
              <CalculatorCC />
            </CalculatorWrapper>
            {showHistory && <HistoryCC />}
          </Wrapper>
        </Container>
      </MainElement>
    );
  }
}

function mapStateToProps(state) {
  const showHistory = state.history.showHistory;
  return { showHistory };
}

export default connect(mapStateToProps)(MainCC);
