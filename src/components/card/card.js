import React from 'react';
import Rating from "../rating/rating";

export const Card = ({title, desc, avatar, rating, body}) => {
    return (
        <div className="card">
            <div className="card-header">
                <img className={`card-img`} src={avatar} alt={title} width={64} height={64}/>
                <div className={`card-title text-truncate`}>
                    <h3 className={`text-truncate`}>{title}</h3>
                    <p className={`text-truncate`}>{desc}</p>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: body}} className="card-body"/>
            <div className="card-footer">
                <Rating rating={rating} max={5}/>
            </div>
        </div>
    )
};
