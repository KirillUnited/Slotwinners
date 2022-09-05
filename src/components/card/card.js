import React from 'react';
import PropTypes from "prop-types";
import "./card.scss";
import Logo1 from "../../images/ideal-logo 1.svg";
import Logo2 from "../../images/Mastercard-logo 1.svg";
import Logo3 from "../../images/Visa_Inc._logo 1.svg";
import Star from "../../images/star.svg";
import Button from '../button/button';
import Badge1 from "../../images/badge-1.svg";
import CardBadge from "./cardBadge";

const Logos = [Logo1, Logo2, Logo3];

const Card = ({image, bg, color, title = 'Title', index = 2, rating = 10.0, info = [], type = '', theme}) => {
    const cardInfo = info.map((item, index) => {
        return <li className='card-info-item' key={index}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.939 5.4395C6.646 5.7325 3.732 8.6465 3.439 8.9395C2.853 9.5255 2.853 10.475 3.439 11.061C4.025 11.647 4.9745 11.647 5.5605 11.061C5.8535 10.768 8.7675 7.854 9.0605 7.561C9.6465 6.975 9.6465 6.0255 9.0605 5.4395C8.4745 4.8535 7.5245 4.8535 6.939 5.4395Z"
                    fill="none"/>
                <path
                    d="M9.0605 5.4395C8.7675 5.1465 5.8535 2.2325 5.5605 1.9395C4.9745 1.3535 4.025 1.3535 3.439 1.9395C2.853 2.5255 2.853 3.475 3.439 4.061C3.732 4.354 6.646 7.268 6.939 7.561C7.525 8.147 8.4745 8.147 9.0605 7.561C9.6465 6.975 9.6465 6.025 9.0605 5.4395Z"
                    fill="none"/>
            </svg>

            <span className="card-info-text text-clamp">{item}</span>
            <img className='card-info-icon' width={25} height={22} src={Logos[index]}
                 alt={`Brand`}/>
        </li>
    });

    return (
        <div className={`card ${type}`}>
            <div className={`card-banner`} style={{
                backgroundColor: `${color}`,
                backgroundImage: `${bg}`
            }}>
                <CardBadge type={type} index={index} theme={theme}/>
                <div className='card-badge card-rating'>
                    <img className="card-badge-label" src={Badge1} alt="Badge"/>
                    <div className={`card-badge-text  text-truncate`}>
                        <img className="card-badge-icon" width={15} height={15} src={Star} alt="Star"/>
                        <span className={`text-truncate`}>{rating}</span>
                    </div>
                </div>
                <img className='card-banner-img' src={image} alt={title}/>
            </div>
            <div className={`card-body`}>
                <h3 className={`card-title text-clamp ${type === "card-primary" ? "vw-h2" : ""}`}>{title}</h3>
                <ul className='card-info list-style-reset'>
                    {
                        cardInfo
                    }
                </ul>
                <Button text="Go to casino" type="link" style={{alignSelf: "stretch"}}/>
            </div>
        </div>
    )
};

Card.propTypes = {
    index: PropTypes.number,
    image: PropTypes.string,
    bg: PropTypes.string
};

export default Card;
