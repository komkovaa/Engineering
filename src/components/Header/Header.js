import React from "react";
import './Header.css';
import logo from '../../images/Logo.png';
import whatsapp from '../../images/whatsapp.png';
import telegram from '../../images/telegram.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

function Header() {
    return (
        <header className='header'>
            <a className="link" href='/'>
                <img className="logo" src={logo} alt='Logo'></img>
            </a>
            <div className="header__contact-block">
                <div className="header__contact">
                    <div className="header__icons">
                        <img className="header__icon" src={email} alt='Email'></img>
                    </div>
                    <a className='link header__link' href='mailto:info@a-tn.com'>info@a-tn.com</a>
                </div>
                <div className="header__contact">
                    <div className="header__icons">
                        <img className="header__icon" src={telegram} alt='Telegram'></img>
                        <img className="header__icon" src={whatsapp} alt='WhatsApp'></img>
                        <img className="header__icon" src={phone} alt='Phone'></img>
                    </div>
                    <a className='link header__link' href='tel:+971585921679'>+971 58 592 16 79</a>
                </div>
            </div>
        </header>
    )
}

export default Header;