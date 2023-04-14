import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import banner from '../../images/banner.jpg';
import automation from '../../images/automation1.png';
import integration from '../../images/integration.png';
import pneumatic from '../../images/automation.png';
import pipe from '../../images/water-pipe.png';
import system from '../../images/tank.png';
import contract from '../../images/contract.png';
import automation_img from '../../images/automation_img.jpg';
import one from '../../images/1.svg';
import two from '../../images/2.svg';
import three from '../../images/3.svg';
import four from '../../images/4.svg';
import integration_img from '../../images/2.jpg';
import pipelines_img from '../../images/pipeline.jpg';
import pneumatic_img from '../../images/pneumatic.jpg';
import liquid_pumping from '../../images/Liquid-pumping.jpg';

function Main() {
    return (
        <div className='main'>
            <section className='banner'>
                <img className='banner__image' src={banner} alt='Supply system'></img>
                <h1 className='banner__title'>AAA ATN GROUP is an engineering company that represents a wide range of high—quality
                    products and services on the market.</h1>
            </section>

            <section className='about'>
                <h2 className='title'>Our specialization is the turn-key project:</h2>
                <ul className='list about__list'>
                    <li className='about__item'>
                        <img className='about__icon' src={automation} alt='Automation'></img>
                        <p className='about__text'>Automation of production processes and production robotization</p>
                    </li>
                    <li className='about__item'>
                        <img className='about__icon' src={integration} alt='Integration'></img>
                        <p className='about__text'>Integration of solutions based on technical vision system</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pneumatic} alt='Pneumatic'></img>
                        <p className='about__text'>Pneumatic control components</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pipe} alt='Pipelines'></img>
                        <p className='about__text'>Paint and Mastic pipelines and fittings</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={system} alt='Dosing systems'></img>
                        <p className='about__text'>Liquid pumping and dosing systems</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={contract} alt='Collaboratives'></img>
                        <p className='about__text'>Collaboratives works, projects to improve the ergonomics of workplaces, reduce labor costs</p></li>
                </ul>
            </section>
            <section className='automation'>
                <img className='automation__image' src={automation_img} alt='Automation'></img>
                <div className='automation__info'>
                    <h2 className='title'>Automation of production processes and production robotization</h2>
                    <ul className='list automation__list'>
                        <li className='automation__item'>
                            <img className='automation__icon' src={one} alt='one'></img>
                            <p className='automation__text'>Installation and integration of robots</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={two} alt='two'></img>
                            <p className='automation__text'>Lifting devices and manipulators</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={three} alt='three'></img>
                            <p className='automation__text'>Control box</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={four} alt='four'></img>
                            <p className='automation__text'>HMI Operator Pane</p>
                        </li>
                    </ul>
                    <Link className='button' to='/automation'>More</Link></div>
            </section>
            <section className='integration'>
                <div className='info'>
                    <h2 className='title'>Integration of solutions based on machine vision system</h2>
                    <p className='text'>Machine vision tools allow companies around the world to improve assembly inspection, eliminate defects, and automate production in a wide range of industries.</p>
                    <p className='text'>We can offer 2D and 3D machine vision system which helps eliminate defects, verify assembly, and track information throughout the production process. A wide range of models, including line scan and color systems, meet most price and performance requirements.</p>
                </div>
                <img className='integration__image' src={integration_img} alt='Integration'></img>
            </section>
            <section className='pneumatic'>
                <img className='pneumatic__image' src={pneumatic_img} alt='Pneumatic control components'></img>
                <div className='info'>
                    <h2 className='title'>Pneumatic control components</h2>
                    <p className='text'>Design, assembly, supply of pneumatic equipment control boxes. The assembly is carried out on the basis of pneumatic components from SMC Pneumatic, FESTO, CAMOZZI.</p>
                    <p className='text'>Design, assembly, supply of pneumatic safety systems.</p>
                </div>
            </section>
            <section className='pipelines'>
                <div className='info'>
                    <h2 className='title'>Paint and Mastic pipelines and fittings</h2>
                    <p className='text'>Our company possesses the knowledge and experience originates from years of installation and adjustment of either the low (up to 30 bar) and high (up to 500 bar) pressure feeding lines, extremely challenging systems for viscous medias (like glues, sealers, mastics), other projects to require comprehensive and bespoke approach.</p>
                    <p className='text'></p>
                </div>
                <img className='pipelines__image' src={pipelines_img} alt='Pipelines'></img>
            </section>
            <section className='systems'>
                <img className='system__image' src={liquid_pumping} alt='Liquid pumping'></img>
                <div className='info'>
                    <div className='system__info'>
                        <h2 className='title'>Liquid pumping and dosing systems</h2>
                        <p className='text'>Calculation, selection, delivery and installation of technological equipment for the supply, pumping and dosing of liquid.</p>
                        <p className='text'>Dosing units are used when using two-component or three-component materials. Where the accuracy of dosing the volumes of each component is very important. The installation eliminates the influence of the human factor, which significantly reduces the risk of defects.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;
