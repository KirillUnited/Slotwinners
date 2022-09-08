import React from 'react';

function Picture({ src = "", srcSet="", text, breakpoint = "767px", ...props }) {
    return (
        <picture {...props}>
            <source media={`(max-width: ${breakpoint})`}
                srcSet={srcSet} />
            <img src={src}
                alt={text} />
        </picture>
    )
}

export default Picture;
