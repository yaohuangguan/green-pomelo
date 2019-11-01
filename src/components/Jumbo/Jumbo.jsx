import React from "react";
import { Link } from "react-router-dom";
const Jumbo = () => {
  return (
    <div>
      <div
        className='card card-image mb-4'
        style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/320587/screenshots/3244776/nongfu.jpg)",
          backgroundPosition: "center"
        }}
      >
        <div className='text-white text-center rgba-stylish-strong py-5 px-4'>
          <div className='py-5'>
            <h5 className='h5 text-success'>
              <i className='fas fa-camera-retro'></i> 绿柚社区
            </h5>
            <h2 className='card-title h2 my-4 py-2'>
              欢迎来到绿柚社区，与100,000+设计师分享
            </h2>
            <p className='mb-4 pb-2 px-md-5 mx-md-5'>
              我们是一个新兴的平台,欢迎你的加入
            </p>
            <Link className='btn peach-gradient' to='/shop'>
              <i className='fas fa-clone left'></i> 查看灵感
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
