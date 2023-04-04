import React, { Component } from 'react';
import ButtonsCC from '../Buttons/ButtonsCC';
import OutputCC from '../Output/OutputCC';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class CalculatorCC extends Component {
  render() {
    return (
      <>
        <OutputCC />
        <ErrorBoundary>
          <ButtonsCC />
        </ErrorBoundary>
      </>
    );
  }
}

export default CalculatorCC;
