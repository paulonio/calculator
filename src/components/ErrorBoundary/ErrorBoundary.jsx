import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import Output from '../Output/Output';
import OutputCC from '../Output/OutputCC';
import ButtonsCC from '../Buttons/ButtonsCC';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { isError: true, error };
  }

  resetError() {
    this.setState({ isError: false, error: null });
  }

  render() {
    if (this.state.isError) {
      if (this.props.isClass) {
        return (
          <>
            <OutputCC error={this.state.error} />
            <ButtonsCC isError={true} resetError={this.resetError.bind(this)} />
          </>
        );
      }
      return (
        <>
          <Output error={this.state.error} />
          <Buttons isError={true} resetError={this.resetError.bind(this)} />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
