import { Link } from "gatsby";
import * as React from "react";
import { menuItems } from "./header.data";
import logo from "../../images/logo.svg";
import Button from "../button/button";
import HeaderMobile from "./headerMobile";
import { useState } from "react";
import Modal from "../modal/modal";
import Form, {FormInput} from "../form/form";
import Email from "../../images/Email.svg";
import iPhoneX from "../../images/iPhoneX.svg";
import Address from "../../images/Address.svg";
import Calendar from "../../images/Calendar.svg";
import Password from "../../images/Password.svg";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const handleMenuState = (prevState) => {
        setMenuActive(prevFormData => !prevFormData);
    };
    const [isSignupModal, setSignupModal] = useState(false);
    const [isLoginModal, setLoginModal] = useState(false);
    return (
        <header className={`header ${menuActive ? "header-menu-active" : ""}`}>
            <Modal
                isVisible={isSignupModal}
                title="Sign up"
                content={
                    <>
                        <Form id="sign_up">
                            <FormInput type="text" id={`first_name`} name={`first_name`} placeholder="First name" required/>
                            <FormInput type="text" id={`last_name`} name={`last_name`} placeholder="Last name"/>
                            <FormInput type="email" id={`email`} name={`email`} placeholder="Email" required>
                                <svg className={`form-input-icon`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99984 1.66667C5.40737 1.66667 1.6665 5.40754 1.6665 10C1.6665 14.5925 5.40737 18.3333 9.99984 18.3333C11.0282 18.3333 12.0166 18.1463 12.9279 17.8044C13.0325 17.7676 13.1288 17.7102 13.211 17.6358C13.2932 17.5613 13.3597 17.4711 13.4066 17.3706C13.4535 17.2701 13.4798 17.1612 13.4841 17.0504C13.4884 16.9396 13.4705 16.829 13.4315 16.7251C13.3925 16.6213 13.3332 16.5263 13.257 16.4457C13.1808 16.3651 13.0893 16.3005 12.9878 16.2557C12.8863 16.2109 12.7769 16.1868 12.666 16.1849C12.5551 16.1829 12.445 16.2031 12.342 16.2443C11.6141 16.5174 10.8265 16.6667 9.99984 16.6667C6.30813 16.6667 3.33317 13.6917 3.33317 10C3.33317 6.3083 6.30813 3.33334 9.99984 3.33334C13.6915 3.33334 16.6665 6.3083 16.6665 10V10.8333C16.6665 11.7639 15.9304 12.5 14.9998 12.5C14.0693 12.5 13.3332 11.7639 13.3332 10.8333V10V6.66667C13.3348 6.45525 13.2561 6.2511 13.1128 6.09557C12.9696 5.94005 12.7726 5.84477 12.5618 5.82905C12.3509 5.81332 12.142 5.87832 11.9773 6.01088C11.8125 6.14344 11.7044 6.33364 11.6746 6.54297C11.083 6.09804 10.3678 5.83334 9.58317 5.83334C7.45829 5.83334 5.83317 7.76661 5.83317 10C5.83317 12.2334 7.45829 14.1667 9.58317 14.1667C10.6898 14.1667 11.6581 13.6395 12.3346 12.8215C12.9444 13.6349 13.9127 14.1667 14.9998 14.1667C16.8309 14.1667 18.3332 12.6645 18.3332 10.8333V10C18.3332 5.40754 14.5923 1.66667 9.99984 1.66667ZM9.58317 7.50001C10.675 7.50001 11.6665 8.55756 11.6665 10C11.6665 11.4424 10.675 12.5 9.58317 12.5C8.49139 12.5 7.49984 11.4424 7.49984 10C7.49984 8.55756 8.49139 7.50001 9.58317 7.50001Z" fill="black"/>
                                </svg>

                                <span className="error-msg">Email address is invalid</span>
                            </FormInput>
                            <FormInput type="phone" id={`phone`} name={`phone`} placeholder="Phone number">
                                <img src={iPhoneX} className={`form-input-icon`} alt="phone"/>
                            </FormInput>
                            <FormInput type="text" id={`address`} name={`address`} placeholder="Address">
                                <img src={Address} className={`form-input-icon`} alt="address"/>
                            </FormInput>
                            <FormInput type="text" id={`birthdate`} name={`birthdate`} placeholder="Birthdate">
                                <img src={Calendar} className={`form-input-icon`} alt="birthdate"/>
                            </FormInput>
                            <FormInput type="password" id={`password`} name={`password`} placeholder="Password" required>
                                <svg className={`form-input-icon`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 1.66666C8.16658 1.66666 6.66683 3.16641 6.66683 4.99999V6.66666H5.2085C4.17475 6.66666 3.3335 7.50791 3.3335 8.54166V16.4583C3.3335 17.4921 4.17475 18.3333 5.2085 18.3333H14.7918C15.8256 18.3333 16.6668 17.4921 16.6668 16.4583V8.54166C16.6668 7.50791 15.8256 6.66666 14.7918 6.66666H13.3335V4.99999C13.3335 3.16641 11.8337 1.66666 10.0002 1.66666ZM10.0002 2.91666C11.1583 2.91666 12.0835 3.8419 12.0835 4.99999V6.66666H7.91683V4.99999C7.91683 3.8419 8.84207 2.91666 10.0002 2.91666ZM7.0835 11.6667C7.54391 11.6667 7.91683 12.0396 7.91683 12.5C7.91683 12.9604 7.54391 13.3333 7.0835 13.3333C6.62308 13.3333 6.25016 12.9604 6.25016 12.5C6.25016 12.0396 6.62308 11.6667 7.0835 11.6667ZM10.0002 11.6667C10.4606 11.6667 10.8335 12.0396 10.8335 12.5C10.8335 12.9604 10.4606 13.3333 10.0002 13.3333C9.53975 13.3333 9.16683 12.9604 9.16683 12.5C9.16683 12.0396 9.53975 11.6667 10.0002 11.6667ZM12.9168 11.6667C13.3772 11.6667 13.7502 12.0396 13.7502 12.5C13.7502 12.9604 13.3772 13.3333 12.9168 13.3333C12.4564 13.3333 12.0835 12.9604 12.0835 12.5C12.0835 12.0396 12.4564 11.6667 12.9168 11.6667Z" fill="black"/>
                                </svg>
                                <span className="error-msg">Wrong password</span>
                            </FormInput>
                            <FormInput type="password" id={`confirm_password`} name={`confirm_password`} placeholder="Confirm password" required>
                                <svg className={`form-input-icon`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 1.66666C8.16658 1.66666 6.66683 3.16641 6.66683 4.99999V6.66666H5.2085C4.17475 6.66666 3.3335 7.50791 3.3335 8.54166V16.4583C3.3335 17.4921 4.17475 18.3333 5.2085 18.3333H14.7918C15.8256 18.3333 16.6668 17.4921 16.6668 16.4583V8.54166C16.6668 7.50791 15.8256 6.66666 14.7918 6.66666H13.3335V4.99999C13.3335 3.16641 11.8337 1.66666 10.0002 1.66666ZM10.0002 2.91666C11.1583 2.91666 12.0835 3.8419 12.0835 4.99999V6.66666H7.91683V4.99999C7.91683 3.8419 8.84207 2.91666 10.0002 2.91666ZM7.0835 11.6667C7.54391 11.6667 7.91683 12.0396 7.91683 12.5C7.91683 12.9604 7.54391 13.3333 7.0835 13.3333C6.62308 13.3333 6.25016 12.9604 6.25016 12.5C6.25016 12.0396 6.62308 11.6667 7.0835 11.6667ZM10.0002 11.6667C10.4606 11.6667 10.8335 12.0396 10.8335 12.5C10.8335 12.9604 10.4606 13.3333 10.0002 13.3333C9.53975 13.3333 9.16683 12.9604 9.16683 12.5C9.16683 12.0396 9.53975 11.6667 10.0002 11.6667ZM12.9168 11.6667C13.3772 11.6667 13.7502 12.0396 13.7502 12.5C13.7502 12.9604 13.3772 13.3333 12.9168 13.3333C12.4564 13.3333 12.0835 12.9604 12.0835 12.5C12.0835 12.0396 12.4564 11.6667 12.9168 11.6667Z" fill="black"/>
                                </svg>
                                <span className="error-msg">Wrong password</span>
                            </FormInput>
                        </Form>
                    </>
                }
                footer={
                    <>
                        <Button type="submit" form="sign_up">
                            Sign up
                        </Button>
                        <p>Already have an account? <a href="#" onClick={() => {
                            setSignupModal(false);
                            setLoginModal(true);
                        }} style={{ color: "var(--color-secondary)" }}>Login</a></p>
                    </>
                }
                onClose={() => setSignupModal(false)}
            />
            <Modal
                data-login
                isVisible={isLoginModal}
                title="Log in"
                content={
                    <>
                        <Form id="log_in">
                            <FormInput type="email" id={`email`} name={`email`} placeholder="Email" required>
                                <svg className={`form-input-icon`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99984 1.66667C5.40737 1.66667 1.6665 5.40754 1.6665 10C1.6665 14.5925 5.40737 18.3333 9.99984 18.3333C11.0282 18.3333 12.0166 18.1463 12.9279 17.8044C13.0325 17.7676 13.1288 17.7102 13.211 17.6358C13.2932 17.5613 13.3597 17.4711 13.4066 17.3706C13.4535 17.2701 13.4798 17.1612 13.4841 17.0504C13.4884 16.9396 13.4705 16.829 13.4315 16.7251C13.3925 16.6213 13.3332 16.5263 13.257 16.4457C13.1808 16.3651 13.0893 16.3005 12.9878 16.2557C12.8863 16.2109 12.7769 16.1868 12.666 16.1849C12.5551 16.1829 12.445 16.2031 12.342 16.2443C11.6141 16.5174 10.8265 16.6667 9.99984 16.6667C6.30813 16.6667 3.33317 13.6917 3.33317 10C3.33317 6.3083 6.30813 3.33334 9.99984 3.33334C13.6915 3.33334 16.6665 6.3083 16.6665 10V10.8333C16.6665 11.7639 15.9304 12.5 14.9998 12.5C14.0693 12.5 13.3332 11.7639 13.3332 10.8333V10V6.66667C13.3348 6.45525 13.2561 6.2511 13.1128 6.09557C12.9696 5.94005 12.7726 5.84477 12.5618 5.82905C12.3509 5.81332 12.142 5.87832 11.9773 6.01088C11.8125 6.14344 11.7044 6.33364 11.6746 6.54297C11.083 6.09804 10.3678 5.83334 9.58317 5.83334C7.45829 5.83334 5.83317 7.76661 5.83317 10C5.83317 12.2334 7.45829 14.1667 9.58317 14.1667C10.6898 14.1667 11.6581 13.6395 12.3346 12.8215C12.9444 13.6349 13.9127 14.1667 14.9998 14.1667C16.8309 14.1667 18.3332 12.6645 18.3332 10.8333V10C18.3332 5.40754 14.5923 1.66667 9.99984 1.66667ZM9.58317 7.50001C10.675 7.50001 11.6665 8.55756 11.6665 10C11.6665 11.4424 10.675 12.5 9.58317 12.5C8.49139 12.5 7.49984 11.4424 7.49984 10C7.49984 8.55756 8.49139 7.50001 9.58317 7.50001Z" fill="black"/>
                                </svg>

                                <span className="error-msg">Email address is invalid</span>
                            </FormInput>
                            <FormInput type="password" id={`password`} name={`password`} placeholder="Password" required>
                                <svg className={`form-input-icon`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 1.66666C8.16658 1.66666 6.66683 3.16641 6.66683 4.99999V6.66666H5.2085C4.17475 6.66666 3.3335 7.50791 3.3335 8.54166V16.4583C3.3335 17.4921 4.17475 18.3333 5.2085 18.3333H14.7918C15.8256 18.3333 16.6668 17.4921 16.6668 16.4583V8.54166C16.6668 7.50791 15.8256 6.66666 14.7918 6.66666H13.3335V4.99999C13.3335 3.16641 11.8337 1.66666 10.0002 1.66666ZM10.0002 2.91666C11.1583 2.91666 12.0835 3.8419 12.0835 4.99999V6.66666H7.91683V4.99999C7.91683 3.8419 8.84207 2.91666 10.0002 2.91666ZM7.0835 11.6667C7.54391 11.6667 7.91683 12.0396 7.91683 12.5C7.91683 12.9604 7.54391 13.3333 7.0835 13.3333C6.62308 13.3333 6.25016 12.9604 6.25016 12.5C6.25016 12.0396 6.62308 11.6667 7.0835 11.6667ZM10.0002 11.6667C10.4606 11.6667 10.8335 12.0396 10.8335 12.5C10.8335 12.9604 10.4606 13.3333 10.0002 13.3333C9.53975 13.3333 9.16683 12.9604 9.16683 12.5C9.16683 12.0396 9.53975 11.6667 10.0002 11.6667ZM12.9168 11.6667C13.3772 11.6667 13.7502 12.0396 13.7502 12.5C13.7502 12.9604 13.3772 13.3333 12.9168 13.3333C12.4564 13.3333 12.0835 12.9604 12.0835 12.5C12.0835 12.0396 12.4564 11.6667 12.9168 11.6667Z" fill="black"/>
                                </svg>
                                <span className="error-msg">Wrong password</span>
                            </FormInput>
                        </Form>
                        <p style={{marginTop: "20px"}}>Forgot your password?</p>
                    </>
                }
                footer={
                    <>
                        <Button type="submit" form="log_in">
                            Log in
                        </Button>
                        <p>Don`t have an account? <a href="#" onClick={() => {
                            setLoginModal(false);
                            setSignupModal(true);
                        }} style={{ color: "var(--color-secondary)" }}>Sign up</a></p>
                    </>
                }
                onClose={() => setLoginModal(false)}
            />
            <HeaderMobile handleMenu={handleMenuState} />
            <div onClick={handleMenuState} className="header-container vw-container">
                <div onClick={(e) => e.stopPropagation()} className="header-inner">
                    <div className="header-item has-logo">
                        <button onClick={handleMenuState} className="menuToggle hidden-more-sm"
                            aria-label="Hide Navigation Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.3244 0.652135C22.0603 0.658371 21.8094 0.768842 21.6265 0.959426L12.0002 10.5857L2.37385 0.959426C2.28064 0.863435 2.16912 0.787125 2.04588 0.735012C1.92265 0.6829 1.79021 0.656046 1.65641 0.656041C1.45739 0.656089 1.26292 0.715513 1.09786 0.826708C0.932811 0.937903 0.804687 1.09581 0.729884 1.28023C0.655081 1.46466 0.637001 1.6672 0.677957 1.86196C0.718913 2.05671 0.817043 2.23482 0.959791 2.37349L10.5861 11.9998L0.959791 21.6261C0.86382 21.7182 0.787199 21.8286 0.734416 21.9507C0.681632 22.0729 0.653748 22.2043 0.652395 22.3373C0.651043 22.4704 0.676249 22.6023 0.726538 22.7255C0.776827 22.8487 0.851188 22.9606 0.945266 23.0547C1.03934 23.1488 1.15125 23.2231 1.27442 23.2734C1.3976 23.3237 1.52957 23.3489 1.66261 23.3476C1.79565 23.3462 1.92708 23.3183 2.04921 23.2655C2.17134 23.2127 2.28171 23.1361 2.37385 23.0402L12.0002 13.4139L21.6265 23.0402C21.7186 23.1361 21.829 23.2127 21.9511 23.2655C22.0732 23.3183 22.2047 23.3462 22.3377 23.3475C22.4707 23.3489 22.6027 23.3237 22.7259 23.2734C22.8491 23.2231 22.961 23.1488 23.055 23.0547C23.1491 22.9606 23.2235 22.8487 23.2738 22.7255C23.3241 22.6023 23.3493 22.4704 23.3479 22.3373C23.3466 22.2043 23.3187 22.0729 23.2659 21.9507C23.2131 21.8286 23.1365 21.7182 23.0405 21.6261L13.4142 11.9998L23.0405 2.37349C23.1859 2.23392 23.2858 2.05366 23.327 1.85635C23.3682 1.65905 23.3488 1.4539 23.2714 1.2678C23.1939 1.0817 23.0621 0.923338 22.8931 0.813475C22.7241 0.703611 22.5259 0.647374 22.3244 0.652135Z"
                                    fill="white" />
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
                            {menuItems.map(({ path, name, icon }, index) => {
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
                        <Button state="button-invert" onClick={() => setLoginModal(true)}>Login</Button>
                        <Button onClick={() => setSignupModal(true)}>Sign up</Button>
                    </div>
                </div>
            </div>
        </header>)
};

export default Header;
