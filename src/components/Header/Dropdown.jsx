import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Dropdown.scss";
const Dropdown = ({ currentUser, classname }) => {
  return (
    <div>
      <li className={`${classname} dropdown`}>
        <span>
          {"Hi " + currentUser.displayName} <i class='fas fa-caret-down'></i>
        </span>

        <ul className='dropdown-menu'>
          <li>
            <Link className='dropdown-item' onClick={() => auth.signOut()}>
              SIGN OUT
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default Dropdown;
