import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      请求界面不存在，点击 <Link to="/">返回</Link> 即可回到主页
    </div>
  );
};

export default NotFound;
