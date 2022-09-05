import { Link } from "gatsby";
import * as React from "react";
import { menuItems } from "./header.data";
import logo from "../../images/logo.svg";

const Header = (props) => (
  <header className="header has-img-fit">
    <div className="vw-container">
      <div className="header-inner">
        <div className="header-item">
          <img
            className="header-logo"
            src={logo}
            alt="Slotwinners"
            width={288}
            height={62}
          />
        </div>
        <nav className="header-item header-navbar">
          <ul className="header-menu list-style-reset">
            {menuItems.map(({ name, icon }, index) => {
              return (
                <li className="header-menu-item" key={index}>
                  <a href={`#${name}`} className="header-link">
                    <span>{name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="header-item">
          <button className={`button`}>Login</button>
          <button className={`button`}>Sign up</button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
