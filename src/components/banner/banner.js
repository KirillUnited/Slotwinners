import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Banner = () => {
    return (
        <div className="banner vw-grid vw-grid-col-2">
            <div className="banner-item">
                <StaticImage
                    src="../../images/hero.png"
                    alt="Fun slot games online for free!"
                    width={512}
                    height={616}
                    placeholder={`blur`}
                />
            </div>
            <div className="banner-item">
                <h1 className='banner-title'>Fun slot games online for free!</h1>
                <h4 className='banner-subtitle'>
                    Slotwinners is an online slot gaming site where you can learn the best strategies to win without losing any money
                </h4>
            </div>
        </div>
    )
};

export default Banner;
