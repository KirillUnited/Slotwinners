import React from 'react';
import Rating from "../rating/rating";
import {GatsbyImage} from "gatsby-plugin-image";

const Card = ({type = "v-1", title, desc, avatar, rating, body}) => {
    return (
        <div className={`card card-${type}`}>
            <div className="card-header card-item">
                {
                    type === "v-1"
                        ?
                        <>
                            {
                                avatar
                                &&
                                <GatsbyImage
                                    className={`card-img`}
                                    alt={title}
                                    image={avatar}
                                />
                            }
                            <div className={`card-title text-truncate`}>
                                <h3 className={`text-truncate`}>{title}</h3>
                                <p className={`text-truncate`}>{desc}</p>
                            </div>
                        </>
                        :
                        <img className={`card-img`} src={avatar} alt={title} width={64} height={64}/>
                }
            </div>
            <div dangerouslySetInnerHTML={{__html: body}} className="card-body card-item"/>
            {
                type === "v-1"
                &&
                <div className="card-footer card-item">
                    <Rating rating={rating} max={5}/>
                </div>
            }
        </div>
    )
};

export {Card};
