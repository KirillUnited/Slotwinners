import React from 'react';
import brand1 from "../../images/Onlyplay.svg";
import brand2 from "../../images/Swintt.svg";
import brand3 from "../../images/KAGaming.svg";
import brand4 from "../../images/GO.svg";

const brands = [{brand: brand1, url: "https://onlyplay.net/games"}, {brand: brand2, url: "https://www.swintt.com/games/"}, {brand: brand3, url: "https://www.kaga88.com/"}, {brand: brand4, url: "https://www.playngo.com/"}];

const Brands = () => {
    return (
        <div className={`brands vw-grid`}>
            <h2 className={`brands-title`}>Trendy brands:</h2>
            <ul className={`brands-list list-style-reset`}>
                {brands.map(({brand, url}, index) => (
                    <li className={`brands-item`} key={index}>
                        <a href={url} target="_blank" rel="noreferrer" className='brands-item-link'>
                            <img className={`brands-item-logo`} src={brand} alt="Brand" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export {Brands as default};
