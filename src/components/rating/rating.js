import React from 'react';
import star from "../../images/star.svg";

const Rating = ({rating, max = 10}) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        if (i >= max) break;

        stars.push(<img className={`rating-star`} src={star} alt={`rating`} key={i}/>);
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
};

export default Rating;
