import React from 'react';
import { Link } from 'react-router-dom';
import './MainAr.css';
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
                <h1 className='banner__title'>AAA ATN مجموعة</h1>
                <h1 className='banner__description'>شركة هندسية تمثل مجموعة واسعة من المنتجات والخدمات عالية الجودة في السوق</h1>
                <img className='banner__image' src={banner} alt='Supply system'></img>
            </section>

            <section className='about'>
                <h2 className='title'>تخصصنا هو تسليم المشاريع الجاهزة للأستخدام</h2>
                <ul className='list about__list'>
                    <li className='about__item'>
                        <img className='about__icon' src={automation} alt='Automation'></img>
                        <p className='about__text'>أتمتة عمليات الإنتاج وروبوتات الإنتاج</p>
                    </li>
                    <li className='about__item'>
                        <img className='about__icon' src={integration} alt='Integration'></img>
                        <p className='about__text'>تكامل الحلول القائمة على نظام الرؤية الفنية</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pneumatic} alt='Pneumatic'></img>
                        <p className='about__text'>مكونات التحكم الهوائية</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={pipe} alt='Pipelines'></img>
                        <p className='about__text'>خطوط الأنابيب والتجهيزات الخاصة بالطلاء والمصطكي</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={system} alt='Dosing systems'></img>
                        <p className='about__text'>أنظمة ضخ السوائل وتحديد الجرعات</p></li>
                    <li className='about__item'>
                        <img className='about__icon' src={contract} alt='Collaboratives'></img>
                        <p className='about__text'>يعمل التعاونيات ، مشاريع لتحسين بيئة العمل في أماكن العمل ، وخفض تكاليف العمالة</p></li>
                </ul>
            </section>
            <section className='automation'>
                <img className='automation__image' src={automation_img} alt='Automation'></img>
                <div className='automation__info'>
                    <h2 className='title'>أتمتة عمليات الإنتاج وروبوتات الإنتاج</h2>
                    <ul className='list automation__list'>
                        <li className='automation__item'>
                            <img className='automation__icon' src={one} alt='one'></img>
                            <p className='automation__text'>تركيب وتكامل الروبوتات</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={two} alt='two'></img>
                            <p className='automation__text'>أجهزة الرفع والمتلاعبين</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={three} alt='three'></img>
                            <p className='automation__text'>صندوق التحكم</p>
                        </li>
                        <li className='automation__item'>
                            <img className='automation__icon' src={four} alt='four'></img>
                            <p className='automation__text'>لوحة مشغل اتش ام اي</p>
                        </li>
                    </ul>
                    <Link className='button' to='/automationar'>أكثر</Link></div>
            </section>
            <section className='integration'>
                <div className='info'>
                    <h2 className='title'>تكامل الحلول على أساس نظام رؤية الآلة</h2>
                    <p className='text'>تسمح أدوات رؤية الماكينة للشركات حول العالم بتحسين فحص التجميع ، والقضاء على العيوب ، وأتمتة الإنتاج في مجموعة واسعة من الصناعات.</p>
                    <p className='text'>يمكننا تقديم نظام رؤية الماكينة ثنائي الأبعاد وثلاثي الأبعاد الذي يساعد في القضاء على العيوب ، والتحقق من التجميع ، وتتبع المعلومات خلال عملية الإنتاج. مجموعة واسعة من الطرز ، بما في ذلك أنظمة المسح الضوئي والألوان ، تلبي معظم متطلبات السعر والأداء</p>
                </div>
                <img className='integration__image' src={integration_img} alt='Integration'></img>
            </section>
            <section className='pneumatic'>
                <img className='pneumatic__image' src={pneumatic_img} alt='Pneumatic control components'></img>
                <div className='info'>
                    <h2 className='title'>مكونات التحكم الهوائية</h2>
                    <p className='text'>تصميم وتجميع وتوريد صناديق التحكم في المعدات الهوائية. يتم التجميع على أساس المكونات الهوائية من
اس ام س هوائي - فيستو - كاموزى
</p>
                    <p className='text'>تصميم وتجميع وتوريد أنظمة الأمان الهوائية</p>
                </div>
            </section>
            <section className='pipelines'>
                <div className='info'>
                    <h2 className='title'>خطوط الأنابيب والتجهيزات الخاصة بالطلاء والمصطكي</h2>
                    <p className='text'>تمتلك شركتنا المعرفة والخبرة التي نشأت من سنوات من التثبيت والتعديل لخطوط التغذية ذات الضغط المنخفض (حتى 30 بار) والعالية (حتى 500 بار) ، وهي أنظمة صعبة للغاية للوسائط اللزجة (مثل المواد اللاصقة والسدادات والمعاجين) ، مشاريع أخرى تتطلب نهجًا شاملاً ومفصلًا</p>
                    <p className='text'></p>
                </div>
                <img className='pipelines__image' src={pipelines_img} alt='Pipelines'></img>
            </section>
            <section className='systems'>
                <img className='system__image' src={liquid_pumping} alt='Liquid pumping'></img>
                <div className='info'>
                    <div className='system__info'>
                        <h2 className='title'>أنظمة ضخ السوائل وتحديد الجرعات</h2>
                        <p className='text'>حساب واختيار وتسليم وتركيب المعدات التكنولوجية لتوريد وضخ وجرعات السوائل</p>
                        <p className='text'>تستخدم وحدات الجرعات عند استخدام مواد مكونة من مكونين أو ثلاثة مكونات. حيث تكون دقة الجرعات لأحجام كل مكون مهمة للغاية. يزيل التثبيت تأثير العامل البشري ، مما يقلل بشكل كبير من مخاطر حدوث عيوب</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;
