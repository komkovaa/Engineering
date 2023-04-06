import React from "react";
import './Footer.css';
import logo from '../../images/Logo.svg';

function Footer() {
    return (
        <div className="footer">
            <a className="link" href='/'><img className="logo" src={logo} alt='Логотип'></img></a>
            <ul className="list footer__list">Contact Us
                <li className="footer__item">г. Москва, ул. Малая Семеновская, дом 11/2, строение 2</li>
                <li className="footer__item">пн-пт: 8.00 - 17.00</li>
            </ul>
            <div className="phone">
                <a className='link' href='tel:+79999999999'>+7 999 999 99 99</a>
            </div>
            <a href="https://www.flaticon.com/ru/free-icons/" title="автоматизация иконки">Иконки от Freepik, SBTS2018 - Flaticon</a>
        </div>
    )
}

export default Footer;