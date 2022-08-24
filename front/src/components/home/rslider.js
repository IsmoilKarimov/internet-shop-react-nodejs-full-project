import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss'

// images
import book from '../../assets/img/book.jpg'

const Rslider = () => {
    return(
        <div className="rslider__box">
            <div className="rslider__title">Hamyonbop</div>
            <div className="rslider__stitle">Bu haftadagi eng hamyonbop kitob</div>
            <Splide 
                className="rslider"
                options={{
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: true,
                        pagination: false,
            }}>
                <SplideSlide>
                    <div className="rslider__img" style={{
                        backgroundImage: `url(${book})`
                    }}></div>
                    <div className="rslider__name">IELTS</div>
                    <div className="rslider__author">John Smith</div>
                    <Link to='/' className="btn btn__white rslider__link">
                        <div className="rslider__old">120 000</div>
                        <div className="rslider__new">85 000 сўм</div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <div className="rslider__img" style={{
                        backgroundImage: `url(${book})`
                    }}></div>
                    <div className="rslider__name">IELTS</div>
                    <div className="rslider__author">John Smith</div>
                    <Link to='/' className="btn btn__white rslider__link">
                        <div className="rslider__old">120 000</div>
                        <div className="rslider__new">85 000 сўм</div>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <div className="rslider__img" style={{
                        backgroundImage: `url(${book})`
                    }}></div>
                    <div className="rslider__name">IELTS</div>
                    <div className="rslider__author">John Smith</div>
                    <Link to='/' className="btn btn__white rslider__link">
                        <div className="rslider__old">120 000</div>
                        <div className="rslider__new">85 000 сўм</div>
                    </Link>
                </SplideSlide>
            
            </Splide>
        </div>
    )
} 
export default Rslider