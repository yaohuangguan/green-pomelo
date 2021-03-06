import React from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <div className="d-flex justify-content-center container">
          <h1>
            Something went wrong. Please click <Link to="/">goback</Link> to go
            back to main page!
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
