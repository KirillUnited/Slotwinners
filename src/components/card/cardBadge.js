import React from 'react';
import BadgeDark from "../../images/Best_offer.svg";
import BadgeLight from "../../images/Best_offer_light-theme.svg";
import Badge2 from "../../images/badge 2.svg";
import Crown from "../../images/crown.png";
import CrownLight from "../../images/crown_light-theme.png";

const primaryLabels = {
    "light": BadgeLight,
    "dark": BadgeDark
};

const CardBadge = ({type, index, theme}) => {
    const label = <img className={`card-badge-label`}
                       src={type === "card-primary" ? primaryLabels[theme] : Badge2} alt="Badge"/>;

    return (
        <div className={`card-badge ${type === "card-primary" ? "card-badge-primary" : ""}`}>
            {label}
            <div
                className={`card-badge-text text-truncate`}>
                {type === "card-primary" ?
                    <img className="card-badge-icon" width={15} height={15} src={theme === "light" ? CrownLight : Crown}
                         alt="Crown"/> : ''}
                <span className={`text-truncate`}>{type === "card-primary" ? "Best offer" : index}</span>
            </div>
        </div>
    )
};

export default CardBadge;
