import React, { Component } from 'react';
import ButtonsCC from '../Buttons/ButtonsCC';
import OutputCC from '../Output/OutputCC';

class CalculatorCC extends Component {
  render() {
    return (
      <>
        <OutputCC />
        <ButtonsCC />
      </>
    );
  }
}

export default CalculatorCC;
