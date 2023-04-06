import React, { Component } from 'react';
import { MainElement, Wrapper, CalculatorWrapper } from './styled';
import { Container } from '../Container/Container';
import CalculatorCC from '../Calculator/CalculatorCC';
import HistoryCC from '../History/HistoryCC';
import { connect } from 'react-redux';

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
