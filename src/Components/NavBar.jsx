import React from "react";

function NavBar({ username = "User", cartCount = 0 }) {
  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">{username}</div>
      <div className="NavDiv NavTitle"><h1>Grocery App</h1></div>
      <div className="NavDiv NavCart">Cart: {cartCount}</div>
    </div>
  );
}

export default NavBar;
