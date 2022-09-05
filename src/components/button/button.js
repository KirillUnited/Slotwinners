import React from 'react';

const Button = ({ children, state, ...rest }) => {
    return (        
        <button className={`button ${state || ''}`} {...rest}>{children}</button>
    )
};

export default Button;
