import React from "react";
import Directory from "../components/Directory/Directory";
import Jumbo from "../components/Jumbo/Jumbo";
const Homepage = () => {
  return (
    <div className='homepage'>
      <Jumbo></Jumbo>
      <div className='container'>
        <Directory></Directory>
      </div>
    </div>
  );
};

export default Homepage;
