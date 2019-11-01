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
    <div>
      <li className={`${classname} dropdown`}>
        <span>
          {"Hi " + currentUser.displayName}{" "}
          <i className='fas fa-caret-down'></i>
        </span>

        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' onClick={signOut}>
              登出
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default withRouter(Dropdown);
