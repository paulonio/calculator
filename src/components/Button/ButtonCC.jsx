import React, { Component } from 'react';
import { ButtonElement } from './styled';
import chooseAction from '../../utils/chooseAction';
import { connect } from 'react-redux';
import { getResult } from '../../utils/getResult';
import { clear, evaluate } from '../../store/slices/calculatorSlice';
import PropTypes from 'prop-types';

class ButtonCC extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidUpdate(_, prevState) {
    if (this.state.error !== prevState.error) {
      throw this.state.error;
    }
  }

  clickHandler() {
    const type = this.props.type;
    const value = this.props.value;
    if (type === 'evaluate') {
      try {
        const state = this.props.expression;
        const result = getResult(state);
        const action = evaluate({ result });
        this.props.dispatch(action);
      } catch (error) {
        const clearOutput = clear();
        this.props.dispatch(clearOutput);
        this.setState({ error });
      }
    } else {
      const action = chooseAction(type, value);
      this.props.dispatch(action);
    }
  }

  render() {
    return (
      <ButtonElement onClick={this.clickHandler.bind(this)} {...this.props}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

ButtonCC.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  expression: PropTypes.shape({
    previousOperations: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    currentOperand: PropTypes.string,
    overwrite: PropTypes.bool,
    history: PropTypes.arrayOf(PropTypes.string),
  }),
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const expression = state.calculator;
  return { expression };
}

export default connect(mapStateToProps)(ButtonCC);
