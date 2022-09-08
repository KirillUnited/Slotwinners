import React from 'react';
import brand1 from "../../images/Onlyplay.svg";
import brand2 from "../../images/Swintt.svg";
import brand3 from "../../images/KAGaming.svg";
import brand4 from "../../images/GO.svg";

const brands = [brand1, brand2, brand3, brand4]

const Brands = () => {
    return (
        <div className={`brands vw-grid`}>
            <h2 className={`brands-title`}>Trendy brands:</h2>
            <ul className={`brands-list list-style-reset`}>
                {brands.map((brand, index) => (
                    <li className={`brands-item`} key={index}>
                        <img className={`brands-item-logo`} src={brand} alt="Brand"/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export {Brands as default};
