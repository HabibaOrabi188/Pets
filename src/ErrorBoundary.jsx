import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    console.log('in drive state error');
    return {hasError: true};
  }
  componentDidCatch(error, info) {
    console.log('ErrorBoundary caught an error', error, info);
  }

  render() {
    console.log('hjghg;iuSDgfu');
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.<Link to="./">Click here</Link>
        </h1>
      );
    } else {
      return this.props.children;
    }
  }
}
