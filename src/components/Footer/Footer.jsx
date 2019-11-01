import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <footer className='page-footer font-small teal mt-4 mx-auto'>
        <div className='footer-copyright text-center py-3'>
          © 2019 Copyright:
          <a href='https://mdbootstrap.com/education/bootstrap/'>
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
