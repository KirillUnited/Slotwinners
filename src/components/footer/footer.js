import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <footer id="footer" className='footer'>
            <div className='vw-container'>
                <div className='footer-inner'>
                    <div className="footer-info">
                        <p>
                            Alle auf dieser Website aufgeführten Angebote und Aktionen unterliegen bestimmten
                            Bedingungen und Verkaufserfordernissen des jeweiligen Anbieters. Im In den meisten Fällen
                            sind nur Neukunden berechtigt, Angebote, Werbeaktionen und Boni zu erhalten. Die
                            tatsächliche Höhe des Bonus hängt von der individuellen Einzahlungsbetrag. Bitte spielen Sie
                            verantwortungsbewusst, da Glücksspiel süchtig machen kann. Sie müssen mindestens 18 Jahre
                            alt sein, um diese Website nutzen zu können und die Angebote der Online-Casinos.
                        </p>
                    </div>
                    <div className="footer-form">
                        <ul className="footer-icons list-style-reset">
                            <li><img src={`./icons/service.svg`} alt="Superbonus"/></li>
                            <li><img src={`./icons/service-3.svg`} alt="Superbonus"/></li>
                            <li><img src={`./icons/service-2.svg`} alt="Superbonus"/></li>
                            <li><img src={`./icons/service-1.svg`} alt="Superbonus"/></li>
                        </ul>
                        <p className="copy">Copyright © {new Date().getFullYear()} Casino-Leitfaden. Alle Rechte
                            vorbehalten.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
