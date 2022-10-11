import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss';

// images 
import customers from '../../assets/img/customers.png'
import star from '../../assets/img/star.svg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3003/api/review/all')
        .then(res => {
            if(res.data.length>0 && res.data !== 'error'){
                setReviews(res.data)
            }
        })
    })
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
                {reviews.map(review => {
                    let stars = []
                    for(let i=1;i<=review.mark; i++){
                        stars.push(<img src={star} alt="" key={'img'+Math.random()}/>)
                    }
                    return(
                    <SplideSlide key={(review._id)}>
                        <div className="review__box">
                            <div className="review__text">{review.text}</div>
                            <div className="review__bottom">
                                <div className="review__author">
                                    <div className="review__avatar" style={{
                                        backgroundImage: `url('http://localhost:3003/${review.avatar}')`
                                    }}></div>
                                    <div className="review__top">
                                        <div className="review__name">{review.name}</div>
                                        <div className="review__who">{review.work}</div>
                                    </div>
                                </div>
                                <div className="review__count">
                                    {stars}
                                </div>
                            </div>
                        </div>
                    </SplideSlide>              
                )}                
                )}
            </Splide>
        </div>
    )
}
export default Review