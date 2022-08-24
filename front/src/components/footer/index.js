/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import './footer.scss';

// images
import logo from '../../assets/img/logo.svg'
import fb from '../../assets/img/facebook.svg'
import tube from '../../assets/img/youtube.svg'
import lin from '../../assets/img/linkedin.svg'
import tw from '../../assets/img/twitter.svg'
import ins from '../../assets/img/instagram.svg'
import location from '../../assets/img/location.svg'
import phone from '../../assets/img/phone.svg'
import email from '../../assets/img/email.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container d-flex justify-content-between mb-4">
                <div className="footer__item">
                    <Link to='/' className="header__logo">
                        <img src={logo} alt='' />
                        <span className="header__logo--right">
                            <span className="header__logo--name">Pir.uz</span>
                            <span className="header__logo--slogan">Книжный интернет магазин</span>
                        </span>
                    </Link> 
                    <div className="footer__text">
                    Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </div>
                    <div className="footer__title">
                    Bizni kuzating
                    </div>
                    <ul className="footer__social">
                        <li>
                            <a href="#" className="fb">
                                <img src={fb} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tube">
                                <img src={tube} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="tw">
                                <img src={tw} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="lin">
                                <img src={lin} alt='' />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ins">
                                <img src={ins} alt='' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <div className="footer__title">
                    Kitoblar janrlari
                    </div>
                    <ul className="footer__menu half">
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <div className="footer__title">
                    Tezkor havolalar
                    </div>
                    <ul className="footer__menu">
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                        <li><a href='#'>Roman</a></li>
                    </ul>
                </div>
                <div className="foooter__item">
                    <div className="footer__title">Bizning do’kon</div>
                    <div className="footer__map"></div>
                    <div className="footer__contact">
                        <img src={location} alt="" />
                        <div className="footer__val">27 Chashtepa ko'chasi, 
                        <br/>Toshkent, O`zbekiston</div>
                    </div>
                    <div className="footer__contact">
                        <img src={phone} alt="" />
                        <div className="footer__val">+998555004466</div>
                    </div>
                    <div className="footer__contact">
                        <img src={email} alt="" />
                        <div className="footer__val">support@bookoe.id</div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__copy">Pir.uz  -   © 2020 All Rights Reserved</div>
                    <div className="footer__author">
                        <a href="#">Made with ♥ by Peterdraw</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer