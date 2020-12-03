import React from "react";
import { Link } from "react-router-dom";
import icon from "./city.svg";

const Header = () => (
  <header className="bg-primary">
    <h1>
      <img src={icon} className="icon" alt="logo" />
      City Search
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
