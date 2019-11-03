/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Dropdown.scss";

const Dropdown = ({ currentUser, classname, history }) => {
  const signOut = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <div class='dropdown'>
      <button
        class='btn btn-warning dropdown-toggle mr-4'
        type='button'
        id='dropdownMenu1'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        {currentUser.displayName}
      </button>

      <div class='dropdown-menu dropdown-primary'>
        <a class='dropdown-item' onClick={signOut}>
          登出
        </a>
        <a class='dropdown-item'>Another action</a>
        <a class='dropdown-item'>Something else here</a>
        <a class='dropdown-item'>Something else here</a>
      </div>
    </div>
  );
};

export default withRouter(Dropdown);
