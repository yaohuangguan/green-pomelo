import React from "react";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className='btn btn-primary' {...otherProps}>
      {children}
    </div>
  );
};

export default Button;
