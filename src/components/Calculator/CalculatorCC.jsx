import React, { Component } from 'react';

import ButtonsCC from '@components/Buttons/ButtonsCC';
import OutputCC from '@components/Output/OutputCC';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

class CalculatorCC extends Component {
  render() {
    return (
      <>
        <ErrorBoundary isClass={true}>
          <OutputCC />
          <ButtonsCC />
        </ErrorBoundary>
      </>
    );
  }
}

export default CalculatorCC;
