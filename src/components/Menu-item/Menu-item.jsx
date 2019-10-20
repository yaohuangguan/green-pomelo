import React from "react";
import "./Menu-item.scss";
const MenuItem = props => {
  const { title, imageUrl } = props;
  return (
    <div className='menu-item'>
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

export default MenuItem;
