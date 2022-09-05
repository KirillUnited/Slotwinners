import React from 'react';
import "./button.scss";
import { Link } from 'gatsby';

const Button = ({ text, type, ...rest }) => {
    return (
        <>
            {type === "link"
                ? (
                    <Link to='/' className='button' {...rest}>
                        {text}
                    </Link>
                )
                : (
                    <button className={`button`} {...rest}>{text}</button>
                )
            }
        </>
    )
};

export default Button;
