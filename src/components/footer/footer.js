import React from 'react';
import {Link} from "gatsby";

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className='vw-container'>
                <div className='footer-inner'>
                    <div className="footer-info">
                        <h3 className={`footer-title`}>About Us</h3>
                        <p>
                            © Copyright GoldenLionGames {new Date().getFullYear()}. For adult audience only. There is no
                            possibility for actual cash playing or winning actual cash or any prizes on the website.
                            Practice or success at social casino gaming does not imply future success at real money
                            gambling and gaming.
                        </p>
                    </div>
                    <div className="footer-contact">
                        <h3 className={`footer-title`}>Information</h3>
                        <ul className="footer-contact-list list-style-reset">
                            <li>
                                <Link to={`/`}>
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link to={`/`}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
