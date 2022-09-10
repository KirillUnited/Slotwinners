import React from 'react';

const Form = ({id}) => {
    return (
        <form className="form" id={id} method="POST" action="">
            <fieldset className="form-fieldset">
                <FormInput type="text" id={`first_name`} name={`first_name`} placeholder="First name" required/>
                <FormInput type="text" id={`last_name`} name={`last_name`} placeholder="Last name"/>
                <FormInput type="email" id={`email`} name={`email`} placeholder="Email" required/>
                <FormInput type="phone" id={`phone`} name={`phone`} placeholder="Phone number"/>
                <FormInput type="text" id={`address`} name={`address`} placeholder="Address"/>
                <FormInput type="text" id={`birthdate`} name={`birthdate`} placeholder="Birthdate"/>
                <FormInput type="password" id={`password`} name={`password`} placeholder="Password" required/>
                <FormInput type="password" id={`confirm_password`} name={`confirm_password`} placeholder="Confirm password" required/>
            </fieldset>
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
