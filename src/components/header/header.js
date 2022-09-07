import {Link} from "gatsby";
import * as React from "react";
import {menuItems} from "./header.data";
import logo from "../../images/logo.svg";
import Button from "../button/button";
import HeaderMobile from "./headerMobile";
import {useState} from "react";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const handleMenuState = (prevState) => {
        setMenuActive(prevFormData => !prevFormData);
    };
    return (<header className={`header ${menuActive ? "header-menu-active" : ""}`}>
        <HeaderMobile handleMenu={handleMenuState}/>
        <div onClick={handleMenuState} className="header-container vw-container">
            <div onClick={(e) => e.stopPropagation()} className="header-inner">
                <div className="header-item has-logo">
                    <button onClick={handleMenuState} className="menuToggle hidden-more-sm"
                            aria-label="Hide Navigation Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.3244 0.652135C22.0603 0.658371 21.8094 0.768842 21.6265 0.959426L12.0002 10.5857L2.37385 0.959426C2.28064 0.863435 2.16912 0.787125 2.04588 0.735012C1.92265 0.6829 1.79021 0.656046 1.65641 0.656041C1.45739 0.656089 1.26292 0.715513 1.09786 0.826708C0.932811 0.937903 0.804687 1.09581 0.729884 1.28023C0.655081 1.46466 0.637001 1.6672 0.677957 1.86196C0.718913 2.05671 0.817043 2.23482 0.959791 2.37349L10.5861 11.9998L0.959791 21.6261C0.86382 21.7182 0.787199 21.8286 0.734416 21.9507C0.681632 22.0729 0.653748 22.2043 0.652395 22.3373C0.651043 22.4704 0.676249 22.6023 0.726538 22.7255C0.776827 22.8487 0.851188 22.9606 0.945266 23.0547C1.03934 23.1488 1.15125 23.2231 1.27442 23.2734C1.3976 23.3237 1.52957 23.3489 1.66261 23.3476C1.79565 23.3462 1.92708 23.3183 2.04921 23.2655C2.17134 23.2127 2.28171 23.1361 2.37385 23.0402L12.0002 13.4139L21.6265 23.0402C21.7186 23.1361 21.829 23.2127 21.9511 23.2655C22.0732 23.3183 22.2047 23.3462 22.3377 23.3475C22.4707 23.3489 22.6027 23.3237 22.7259 23.2734C22.8491 23.2231 22.961 23.1488 23.055 23.0547C23.1491 22.9606 23.2235 22.8487 23.2738 22.7255C23.3241 22.6023 23.3493 22.4704 23.3479 22.3373C23.3466 22.2043 23.3187 22.0729 23.2659 21.9507C23.2131 21.8286 23.1365 21.7182 23.0405 21.6261L13.4142 11.9998L23.0405 2.37349C23.1859 2.23392 23.2858 2.05366 23.327 1.85635C23.3682 1.65905 23.3488 1.4539 23.2714 1.2678C23.1939 1.0817 23.0621 0.923338 22.8931 0.813475C22.7241 0.703611 22.5259 0.647374 22.3244 0.652135Z"
                                fill="white"/>
                        </svg>

                    </button>
                    <Link to={"/"}>
                        <img
                            className="header-logo"
                            src={logo}
                            alt="Slotwinners"
                            width={288}
                            height={62}
                        />
                    </Link>
                </div>
                <nav className="header-item header-navbar">
                    <ul className="header-menu list-style-reset">
                        {menuItems.map(({path, name, icon}, index) => {
                            return (
                                <li className="header-menu-item" key={index}>
                                    <Link to={path || "/"} className="header-link">
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="header-item header-signup">
                    <Button state="button-invert">Login</Button>
                    <Button>Sign up</Button>
                </div>
            </div>
        </div>
    </header>)
};

export default Header;
