import React from 'react';
import Rating from "../rating/rating";

const Card = ({type = "v-1", title, desc, avatar, rating, body}) => {
    return (
        <div className={`card card-${type}`}>
            <div className="card-header">
                <img className={`card-img`} src={avatar} alt={title} width={64} height={64}/>
                {
                    type === "v-1"
                    &&
                    <div className={`card-title text-truncate`}>
                        <h3 className={`text-truncate`}>{title}</h3>
                        <p className={`text-truncate`}>{desc}</p>
                    </div>
                }
            </div>
            <div dangerouslySetInnerHTML={{__html: body}} className="card-body"/>
            {
                type === "v-1"
                &&
                <div className="card-footer">
                    <Rating rating={rating} max={5}/>
                </div>
            }
        </div>
    )
};

export {Card};
