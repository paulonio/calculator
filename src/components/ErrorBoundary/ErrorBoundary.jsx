import React, { Component } from 'react';
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
      return (
        <>
          <OutputCC error={this.state.error} />
          <ButtonsCC disabled={true} resetError={this.resetError.bind(this)} />
        </>
      );
    }
    return (
      <>
        <OutputCC />
        <ButtonsCC />
      </>
    );
  }
}

export default ErrorBoundary;
