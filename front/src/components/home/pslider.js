/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss';

// images
// import book from '../../assets/img/book.jpg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Pslider = ({type}) => {

    let [products,setProducts] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3003/api/products/${type}`)
        .then(res => {
            setProducts(res.data)
        })
    },[])

    return(
        <div className="pslider__box" style={{
            backgroundImage: `url(${require('../../assets/img/'+type+'bg.jpg')})`
        }}>
            <div className="pslider__title">{type=='recom'?'Sizga taklif etamiz':type=='popular'?'2021-yildagi eng mashhur to’plam':''}</div>
            <div className="pslider__stitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <Splide 
                className="pslider"
                options={{
                        type: 'slide',
                        perPage: 4,
                        autoplay: true,
                        interval: 4000,
                        arrows: true,
                        pagination: false,
                        gap:30,
            }}>
                {products.map(product => {
                    return(
                        <SplideSlide key={product._id}>
                            <Link to={`/product/${product._id}`} className="pslider__img" style={{
                                backgroundImage: `url('http://localhost:3003/${product.img}')`
                            }}></Link>
                        </SplideSlide>
                    )
                })}
                
            </Splide>
        </div>
    )
}
export default Pslider



