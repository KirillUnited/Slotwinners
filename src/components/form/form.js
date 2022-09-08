import React from 'react';
import Button from "../button/button";

const Form = ({id}) => {
    return (
        <form className="form" id={id} method="POST" action="">
            {/*<div className="form-block has-img">*/}
            {/*    /!*<img className={`form-img`} src={} alt=""/>*!/*/}
            {/*</div>*/}
            {/*<fieldset className="form-fieldset">*/}
            {/*    <div className="form-block">*/}
            {/*        <h3 className="form-title">*/}
            {/*            <span>Join the CasinoGuide </span>*/}
            {/*            <span style={{color: "#47A9E9"}}>VIP club!</span>*/}
            {/*        </h3>*/}
            {/*        <legend className="form-desc vw-text">*/}
            {/*            Subscribe to our newsletter now and get free access to all exclusive*/}
            {/*            promotions from the best and most trustable casinos.*/}
            {/*        </legend>*/}
            {/*    </div>*/}
            {/*</fieldset>*/}
        </form>
    )
};

const FormInput = ({type, id, ...rest}) => {
    return (
        <div className="form-input">
            <input
                type={type}
                id={id}
                name={id}
                {...rest}
            />
        </div>
    )
};

export {
    Form as default,
    FormInput
};
