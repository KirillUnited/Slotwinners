import React from 'react';

export const Card = ({title, desc, avatar, body}) => {
    console.log(body)
    return (
        <div className="card">
            <div className="card-header">
                <img src={avatar} alt={title}/>
                {title} / {desc}
            </div>
            <div dangerouslySetInnerHTML={{__html: body}} className="card-body text-clamp" style={{"--lines": "5"}}/>
            <div className="card-footer">Footer</div>
        </div>
    )
}
