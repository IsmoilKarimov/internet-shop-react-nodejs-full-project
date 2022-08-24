import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss';

// images 
import customers from '../../assets/img/customers.png'
import star from '../../assets/img/star.svg'

const Review = () => {
    return(
        <div className="review">
            <div className="container">
                <div className="btitle text-center">Mijozlardan fikrlar</div>
                <div className="review__stitle text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                <img className="review__customers" src={customers} alt="" />
            </div>
            <Splide 
                className="review__slider"
                options={{
                        type: 'loop',
                        perPage: 3,
                        focus: "center",
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        pagination: false,
                        gap:30,
            }}>
                <SplideSlide>
                    <div className="review__box">
                        <div className="review__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
                        <div className="review__bottom">
                            <div className="review__author">
                                <div className="review__avatar"></div>
                                <div className="review__top">
                                    <div className="review__name">Olimov Sardor</div>
                                    <div className="review__who">Kitobxon</div>
                                </div>
                            </div>
                            <div className="review__count">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>               
                <SplideSlide>
                    <div className="review__box">
                        <div className="review__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
                        <div className="review__bottom">
                            <div className="review__author">
                                <div className="review__avatar"></div>
                                <div className="review__top">
                                    <div className="review__name">Olimov Sardor</div>
                                    <div className="review__who">Kitobxon</div>
                                </div>
                            </div>
                            <div className="review__count">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>               
                <SplideSlide>
                    <div className="review__box">
                        <div className="review__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
                        <div className="review__bottom">
                            <div className="review__author">
                                <div className="review__avatar"></div>
                                <div className="review__top">
                                    <div className="review__name">Olimov Sardor</div>
                                    <div className="review__who">Kitobxon</div>
                                </div>
                            </div>
                            <div className="review__count">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>               
            </Splide>
        </div>
    )
}
export default Review