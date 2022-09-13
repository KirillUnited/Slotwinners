import React from 'react';

const Form = ({id, children}) => {
    return (
        <form className="form" id={id} method="POST" action="">
            <fieldset className="form-fieldset">
                {children}
            </fieldset>
        </form>
    )
};

const FormInput = ({type, id, children,...rest}) => {
    return (
        <div className="form-input">
            <input
                type={type}
                id={id}
                name={id}
                {...rest}
            />
            {children}
        </div>
    )
};

export {
    Form as default,
    FormInput
};
