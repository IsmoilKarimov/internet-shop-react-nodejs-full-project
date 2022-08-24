import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss';

import book from '../../assets/img/book.jpg'
// import bg from '../../assets/img/taklifbg.jpg'
import cart from '../../assets/img/cart.svg'

const Promo = () => {
    return(
        <div className="promo">
            <div className="btitle text-center">Mahsus aksiyadagilar</div>
            <div className="promo__stitle text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <Splide 
                className="promo__slider"
                options={{
                        type: 'slide',
                        perPage: 3,
                        autoplay: true,
                        interval: 4000,
                        arrows: true,
                        pagination: false,
                        gap:40,
            }}
                >
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
                <SplideSlide>
                    <div className="promo__box">
                        <div className="promo__img" style={{
                            backgroundImage: `url(${book})`
                        }}> 
                        </div>      
                       <div className="promo__info">
                            <Link to='/' className="promo__link">
                                IELTS beginner
                            </Link>
                            <ul className="promo__list">
                                <li><Link to='/'>English</Link></li>
                                <li><Link to='/'>IELTS</Link></li>
                                <li><Link to='/'>Library</Link></li>
                            </ul>
                            <div className="promo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            </div>
                            <div className="promo__author">Kevin Smiley</div>
                            <div className="promo__bottom">
                                <div className="btn btn__bg promo__cart">
                                    <img src={cart} alt="" />
                                    <span>Savatcha</span>
                                </div>
                                <div className="promo__price">
                                    <div className="promo__old">120 000 so’m</div>
                                    <div className="promo__new">85 000 so’m</div>
                                </div>
                            </div>
                       </div>
                    </div>              
                </SplideSlide>
            </Splide>
        </div>
    )
}
export default Promo



