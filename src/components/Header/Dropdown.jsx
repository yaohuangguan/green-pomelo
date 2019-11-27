/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
import "./Dropdown.scss";

const Dropdown = ({ currentUser, classname, history }) => {
  const signOut = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <div className="dropdown">
      <button
        className=" dropdown-toggle btn btn-outline-white"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {currentUser.displayName}
      </button>

      <div className="dropdown-menu dropdown-primary">
        <Link className="dropdown-item" to="/dashboard">
          个人主页
        </Link>
        <Link className="dropdown-item" to="/settings">
          账户设置
        </Link>
        <Link className="dropdown-item" to="/" onClick={signOut}>
          登出
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Dropdown);
