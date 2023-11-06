import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Hello Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/3574683/pexels-photo-3574683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
