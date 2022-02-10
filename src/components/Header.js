import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let time = new Date();
  let hours = time.getHours();
  let mode = "";
  console.log(hours);

  if (hours > 20) {
    mode = "dayMode";
  } else {
    mode = "nightMode";
  }
  return (
    <div>
      <ul className={`unl ${mode}`}>
        <li className="logo">
          <a href="">Logo</a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
