import React from "react";
import './Footer.css';
import logo from '../../images/Logo.png';
import whatsapp from '../../images/whatsapp.png';
import telegram from '../../images/telegram.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

function Footer() {
    return (
        <div className="footer">
            <a className="link" href='/'><img className="logo" src={logo} alt='Logo'></img></a>
            <div className="contact">
                <div className="contact__icons">
                    <img className="contact__icon" src={email} alt='email'></img>
                </div>
                <a className='link footer__link' href='mailto:info@a-tn.com'>info@a-tn.com</a>
            </div>
            <div className="contact">
                <div className="contact__icons">
                    <img className="contact__icon" src={telegram} alt='Telegram'></img>
                    <img className="contact__icon" src={whatsapp} alt='WhatsApp'></img>
                    <img className="contact__icon" src={phone} alt='Phone'></img>
                </div>
                <a className='link footer__link' href='tel:+971585921679'>+971 58 592 16 79</a>
            </div>
        </div>
    )
}

export default Footer;