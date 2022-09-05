import React from 'react';
import "./form.scss";
import {Link} from "gatsby";
import Button from "../button/button";
import Image from "../../images/korona.png";

const Form = () => {
    return (
        <form className="vw-form" id="subscribeForm" method="POST" action="">
            <div className="vw-form-block has-img">
                <img className={`vw-form-img`} src={Image} alt="Join the CasinoGuide"/>
            </div>
            <fieldset className="vw-form-fieldset">
                <div className="vw-form-block">
                    <h3 className="vw-form-title">
                        <span>Join the CasinoGuide </span>
                        <span style={{color: "#47A9E9"}}>VIP club!</span>
                    </h3>
                    <legend className="vw-form-desc vw-text">
                        Subscribe to our newsletter now and get free access to all exclusive
                        promotions from the best and most trustable casinos.
                    </legend>
                    <div className="vw-form-group">
                        <input type="email" className="vw-form-input" id="email" name="email"
                               placeholder="Enter your email address" required autoComplete="off"/>
                        <Button text="I’m subscribing" type="submit"/>
                    </div>
                </div>
                <div className="vw-form-block">
                    <p className="privacy">
                        18+. You may unsubscribe at any time by clicking the unsubscribe link at the bottom of any of
                        our
                        marketing emails. For more information please check our <Link to="/">Privacy Policy</Link>.
                    </p>
                </div>
            </fieldset>
        </form>
    )
};

export default Form;
