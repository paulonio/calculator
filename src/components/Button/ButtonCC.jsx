import React, { Component } from 'react';
import { ButtonElement } from './styled';
import chooseAction from '../../utils/chooseAction';
import { connect } from 'react-redux';
import { getResult } from '../../utils/getResult';
import { evaluate } from '../../store/slices/calculatorSlice';

class ButtonCC extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
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
        const action = evaluate({ result: error });
        this.props.dispatch(action);
      }
    } else {
      const action = chooseAction(type, value);
      this.props.dispatch(action);
    }
  }

  render() {
    const error = this.props.expression.error;
    const type = this.props.type;

    if (error) {
      if (type === 'clear') {
        return (
          <ButtonElement onClick={this.clickHandler.bind(this)} {...this.props}>
            {this.props.children}
          </ButtonElement>
        );
      } else {
        return (
          <ButtonElement disabled onClick={this.clickHandler.bind(this)} {...this.props}>
            {this.props.children}
          </ButtonElement>
        );
      }
    }
    return (
      <ButtonElement onClick={this.clickHandler.bind(this)} {...this.props}>
        {this.props.children}
      </ButtonElement>
    );
  }
}

function mapStateToProps(state) {
  const expression = state.calculator;
  return { expression };
}

export default connect(mapStateToProps)(ButtonCC);
