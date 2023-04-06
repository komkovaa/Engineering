import React from 'react';
import './Main.css';
import automation from '../../images/automation1.png';
import integration from '../../images/free-icon-dashboard-7663921.png';
import pneumatic from '../../images/automation.png';
import pipe from '../../images/water-pipe.png';
import system from '../../images/tank.png';
import contract from '../../images/contract.png';
import automation_img from '../../images/automation_img.jpg';
import one from '../../images/1.svg';
import two from '../../images/2.svg';
import three from '../../images/3.svg';

function Main() {
    return (
        <div className='main'>
            <section className='banner'>
                <h1 className='banner__title'>AAA ATN GROUP is an engineering company that represents a wide range of high—quality
                    products and services on the market.</h1>
            </section>

            <section className='about'>
                <h2 className='about__title'>Our specialization is the turn-key project:</h2>
                <ul className='list about__list'>
                    <li className='about__item'>
                        <img className='about__icon' src={automation} alt='automation'></img>
                        <p className='about__text'>Automation of production processes and production robotization</p>
                    </li>
                    <li className='about__item'>
                        <img className='about__icon' src={integration} alt='integration'></img>
                        <p className='about__text'>Integration of solutions based on technical vision system</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pneumatic} alt='pneumatic'></img>
                        <p className='about__text'>Pneumatic control components</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pipe} alt='pipelines'></img>
                        <p className='about__text'>Pipelines and fittings</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={system} alt='dosing systems'></img>
                        <p className='about__text'>Liquid pumping and dosing systems</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={contract} alt='collaboratives'></img>
                        <p className='about__text'>Collaboratives works, projects to improve the ergonomics of workplaces, reduce labor costs</p></li>
                </ul>
            </section>
            <section className='automation'>
                <img src={automation_img} alt='automation'></img>
                <ul className='list automation__list'>Automation of production processes and production robotization
                    <li className='automation__item'>
                        <img className='automation__image' src={one} alt='one'></img>
                        <p className='automation__text'>Installation and integration of robots</p>
                        </li>
                    <li className='automation__item'>
                        <img className='automation__image' src={two} alt='two'></img>
                        <p className='automation__text'>Lifting devices and manipulators</p></li>
                    <li className='automation__item'>
                        <img className='automation__image' src={three} alt='three'></img>
                        <p className='automation__text'>Control box</p></li>
                </ul>
            </section>

        </div>
    )
}

export default Main;
