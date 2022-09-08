import React from 'react';
import {FormInput} from "../form/form";
import Button from "../button/button";
import Picture from "../picture/Picture";
import bg from "../../images/bg-subscribe.png";
import bgMobile from "../../images/bg-subscribe-mobile.png";

const Subscribe = () => {
    return (
        <div id="subscribe" className='subscribe card card-v-2'>
            <div className='card-item'>
                <h3 className={`subscribe-title`}>Join our VIP club, Sign up by entering your email</h3>
                <form id="subscribeForm" name="subscribeForm" className="subscribe-form" action="/" method="POST">
                    <FormInput
                        type="email"
                        placeholder="Your Email"
                        required
                        autoComplete="off"
                    />
                    <Button type="submit">
                        Sign up
                    </Button>
                </form>
            </div>
            <Picture
                src={bg}
                srcSet={bgMobile}
                text="Subscribe"
                breakpoint="767px"
                className="subscribe-bg has-img-fit"
            />
        </div>
    )
};

export default Subscribe;
