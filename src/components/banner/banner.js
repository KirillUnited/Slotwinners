import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Banner = () => {
    return (
        <div className="banner vw-grid vw-grid-col-2">
            <div className="banner-item">
                <StaticImage
                    src="../../images/hero.png"
                    alt="Canada’s #1 Social Casino Experience"
                    width={512}
                    height={616}
                    placeholder={`blur`}
                />
            </div>
            <div className="banner-item">
                <h1 className='banner-title'>Canada’s <span style={{ color: "var(--color-secondary)" }}>#1 </span>
                    Social Casino
                    Experience</h1>
                <h4 className='banner-subtitle'>
                    Enjoy playing the most popular online slots. <br className='hidden-less-sm' />
                    Free, fun and legal!
                </h4>
            </div>
        </div>
    )
};

export default Banner;
