import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Buttons from '@components/Buttons/Buttons';
import Output from '@components/Output/Output';
import OutputCC from '@components/Output/OutputCC';
import ButtonsCC from '@components/Buttons/ButtonsCC';

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

ErrorBoundary.propTypes = {
  isClass: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ErrorBoundary;
