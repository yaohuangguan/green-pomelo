import React from "react";
import "./Menu-item.scss";
import { withRouter } from "react-router-dom";
const MenuItem = props => {
  const { title, imageUrl, history, link, match } = props;
  return (
    <div
      className='menu-item'
      onClick={() => history.push(`${match.url}${link}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
