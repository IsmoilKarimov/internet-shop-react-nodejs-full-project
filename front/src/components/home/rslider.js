import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss'

// images
// eslint-disable-next-line no-unused-vars
// import book from '../../assets/img/book.jpg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Rslider = () => {

    let [products, setProducts] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3003/api/products/cheap')
        .then(res => {
            if(res.data.length>0){
                setProducts(res.data)
            }
        })
    },[])

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
                {products.map( product => {
                    return(
                        <SplideSlide key={product._id}>
                            <div className="rslider__img" style={{
                                backgroundImage: `url('http://localhost:3003/${product.img}')`
                            }}></div>
                            <div className="rslider__name">{product.title}</div>
                            <div className="rslider__author">{product.author}</div>
                            <Link to='/' className="btn btn__white rslider__link">
                                {product.sale>0?(
                                    <div className="rslider__row">
                                        <div className="rslider__old">{product.price} so'm</div>
                                        <div className="rslider__new">{product.price*(100-(product.sale))/100} so'm</div>
                                    </div>

                                ):(
                                    <div className="rslider__old__item">{product.price} so'm</div>                
                                )}
                                
                            </Link>
                        </SplideSlide>
                    )
                })}
                
            
            </Splide>
        </div>
    )
} 
export default Rslider