import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Current, PreviousResults, Wrapper } from './styled';

class OutputCC extends Component {
  render() {
    const previous = this.props.previous;
    const current = this.props.current;
    return (
      <Wrapper>
        <PreviousResults>{previous.join(' ')}</PreviousResults>
        <Current>{current}</Current>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const previous = state.calculator.previousOperations;
  const current = state.calculator.currentOperand;
  return { previous, current };
}

export default connect(mapStateToProps)(OutputCC);
