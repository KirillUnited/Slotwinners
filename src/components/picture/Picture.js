import React from 'react';

function Picture({ data = {}, text, breakpoints, ...props }) {
    return (
        <picture {...props}>
            <source media="(max-width: 768px)"
                srcSet={data["768px"]} />
            <img src={data["default"]}
                alt={text} />
        </picture>
    )
}

export default Picture;