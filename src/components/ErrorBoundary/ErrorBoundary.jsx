import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  render() {
    if (this.state.isError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
