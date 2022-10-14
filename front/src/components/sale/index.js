import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './sale.scss';

// images 
// import book from '../../assets/img/book.jpg'
import star from '../../assets/img/star.svg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Sale = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3003/api/products/sale`)
        .then(res => {
            setProducts(res.data)
        })
    })

    return(
        <div className="sale">
            <div className="container">
                <div className="btitle">Qiziqarli taklif</div>
                <Splide 
                    options={{
                            type: 'loop',
                            perPage: 6,
                            autoplay: true,
                            interval: 4000,
                            gap:40,
                    }}
                    className="sale__slider"
                    >
                    {products.map(product => {
                        return(
                            <SplideSlide key={product._id}>
                                <Link to={`/product/${product._id}`} className="sale__box">
                                    <div className="sale__img" style={{
                                        backgroundImage: `url('http://localhost:3003/${product.img}')`
                                    }}>
                                        <div className="sale__discount">{product.sale}%</div>
                                        <div className="sale__review">
                                            <img src={star} alt="" />
                                            <span>4.7</span>    
                                        </div>   
                                    </div>  
                                    <div className="sale__title">{product.title}</div> 
                                    <div className="sale__genre">{product.category.title}</div>
                                    <div className="sale__price">
                                        <div className="sale__old">{product.price.toLocaleString()} so’m</div>    
                                        <div className="sale__new">{(product.price*(100 - product.sale)/100).toLocaleString()} so’m</div>    
                                    </div> 
                                </Link>      
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
        
    )
}
export default Sale