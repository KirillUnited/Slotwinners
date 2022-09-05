import React from 'react';
import "./hero.scss";

const desc = [
    {
        icon: "./icons/icon_1.svg",
        text: "Professional comparison service of Online Casinos"
    },
    {
        icon: "./icons/icon_2.svg",
        text: "Best welcome offers and bonuses in one place"
    },
    {
        icon: "./icons/icon_3.svg",
        text: "Choose from the 10 most popular casinos in Netherlands"
    },
];

const Hero = () => {
    return (
        <section className='vw-section hero'>
            <div className='vw-container'>
                <div className='hero-inner' style={{ backgroundImage: 'url("./Image@2x.png")' }}>
                    <h1 className='hero-title'>
                        <span>Best </span>

                        <span style={{whiteSpace: "nowrap"}}>
                            <span>Casin</span>
                            <svg className="hero-title-icon" width={44} height={41} viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx={20} cy={21} r="16.88" stroke="#282626" strokeWidth="6.24" style={{stroke: "var(--logo-color)"}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.7385 39.4134C33.8744 39.4134 42.1118 31.1212 42.1118 20.8667C42.1118 10.6122 33.8744 2.32002 23.7385 2.32002C13.6026 2.32002 5.36518 10.6122 5.36518 20.8667C5.36518 31.1212 13.6026 39.4134 23.7385 39.4134ZM23.7385 40.8C34.6517 40.8 43.4985 31.8756 43.4985 20.8667C43.4985 9.85781 34.6517 0.93335 23.7385 0.93335C12.8254 0.93335 3.97852 9.85781 3.97852 20.8667C3.97852 31.8756 12.8254 40.8 23.7385 40.8Z" fill="#282626" style={{fill: "var(--logo-color)"}} />
                                <path d="M27.8807 12.8952L22.7441 24.7401L16.019 17.993L27.8807 12.8952Z" fill="#282626" style={{fill: "var(--logo-color)"}} />
                                <path d="M20.951 23.8088L11.2422 27.9813L15.4466 18.2863L20.951 23.8088Z" stroke="#282626" style={{stroke: "var(--logo-color)"}} strokeWidth="1.17397" />
                            </svg>
                            <span>Guide </span>
                        </span>

                        <span style={{ color: "#47A9E9" }}>2022</span>
                    </h1>
                    <ul className="hero-desc list-style-reset">
                        {desc.map(({ text, icon }, index) => {
                            return (
                                <li className="hero-desc-item" key={index}>
                                    <img className="hero-desc-icon" width={32} height={32} src={icon} alt={text} />
                                    <span>{text}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero;
