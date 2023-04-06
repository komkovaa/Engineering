import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/Logo.svg';

function Header() {
    return (
        <header className='header'>
            <a className="link" href='/'><img className="logo" src={logo} alt='Логотип'></img></a>
            <ul className="list header__list">
                <li className="header__item"><a className="link" href="#">Home</a></li>
                <li className="header__item"><a className="link" href="#">Services</a></li>
                <li className="header__item"><a className="link" href="#">Pages</a></li>
                <li className="header__item"><a className="link" href="#">Portfolio</a></li>
            </ul>
            <div className="phone">
                <a className='link' href='tel:+79999999999'>+7 999 999 99 99</a>
            </div>
        </header>
    )
}

export default Header;