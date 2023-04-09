import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Current, PreviousResults, Wrapper } from './styled';

class OutputCC extends Component {
  render() {
    const previous = this.props.previous;
    const current = this.props.current;
    const error = this.props.error;
    return (
      <Wrapper>
        <PreviousResults>{previous.join(' ')}</PreviousResults>
        <Current>{error ? error.message : current}</Current>
      </Wrapper>
    );
  }
}

OutputCC.propTypes = {
  previous: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  current: PropTypes.string,
  error: PropTypes.instanceOf(Error),
};

function mapStateToProps(state) {
  const previous = state.calculator.previousOperations;
  const current = state.calculator.currentOperand;
  return { previous, current };
}

export default connect(mapStateToProps)(OutputCC);
