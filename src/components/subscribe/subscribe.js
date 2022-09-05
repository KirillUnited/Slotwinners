import React from 'react';
import "./subscribe.scss";
import Logo from "../../images/title.png";
import Icon from "../../images/icon_7.svg";
import Form from "../form/form";

const Subscribe = () => {
    return (
        <section id="subscribe" className='vw-section subscribe'>
            <div className='vw-container'>
                <div className='subscribe-inner'>
                    <div className="subscribe-info">
                        <h3 style={{marginBottom: "1em"}}>
                            <img className={`logo`} src={Logo} width={217} alt="Casino Guide"/>
                        </h3>
                        <p>
                            Welcome to Superbonus, the safest Casino Guide in Netherlands! We
                            present the latest and safest casinos available to Dutch customers. We make sure that
                            everyone
                            who comes on the list has simple and safe deposit and withdrawal options for Dutch
                            conditions.
                            Many of the bonuses are time-limited, so we recommend you try today!
                        </p>
                        <a href="#offers" className="guide-link">
                            <img src={Icon} alt=" Scroll up to see the list"/>
                            <span>Scroll up to see the list</span>
                        </a>
                    </div>
                    <div className="subscribe-form">
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Subscribe;
