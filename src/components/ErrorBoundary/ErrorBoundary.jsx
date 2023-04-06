import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { isError: true, error };
  }

  render() {
    if (this.state.isError) {
      return <div>{this.state.error}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
