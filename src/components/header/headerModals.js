import Modal from "../modal/modal";
import Form, {FormInput} from "../form/form";
import Email from "../../images/Email.svg";
import iPhoneX from "../../images/iPhoneX.svg";
import Address from "../../images/Address.svg";
import Calendar from "../../images/Calendar.svg";
import Password from "../../images/Password.svg";
import Button from "../button/button";
import React, {useState} from 'react';

const HeaderModals = ({id, children}) => {
    const [isSignupModal, setSignupModal] = useState(false);
    const [isLoginModal, setLoginModal] = useState(false);

    return (
        <>
            <Modal
                isVisible={isSignupModal}
                title="Sign up"
                content={
                    <>
                        <Form id="sign_up">
                            <FormInput type="text" id={`first_name`} name={`first_name`} placeholder="First name" required/>
                            <FormInput type="text" id={`last_name`} name={`last_name`} placeholder="Last name"/>
                            <FormInput type="email" id={`email`} name={`email`} placeholder="Email" required>
                                <img src={Email} className={`form-input-icon`} alt="email"/>
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
                                <img src={Password} className={`form-input-icon`} alt="password"/>
                            </FormInput>
                            <FormInput type="password" id={`confirm_password`} name={`confirm_password`} placeholder="Confirm password" required>
                                <img src={Password} className={`form-input-icon`} alt="confirm_password"/>
                            </FormInput>
                        </Form>
                    </>
                }
                footer={
                    <>
                        <Button type="submit" form="sign_up">
                            Sign up
                        </Button>
                        <p>Already have an account? <a href="#" onClick={() => setSignupModal(false)} style={{ color: "var(--color-secondary)" }}>Login</a></p>
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
                                <img src={Email} className={`form-input-icon`} alt="email"/>
                            </FormInput>
                            <FormInput type="password" id={`password`} name={`password`} placeholder="Password" required>
                                <img src={Password} className={`form-input-icon`} alt="password"/>
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
                        <p>Don`t have an account? <a href="#" onClick={() => {setLoginModal(false)}} style={{ color: "var(--color-secondary)" }}>Sign up</a></p>
                    </>
                }
                onClose={() => setLoginModal(false)}
            />
        </>
    )
};

export {
    HeaderModals
};

