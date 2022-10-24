/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './home.scss';

// images
// import book from '../../assets/img/book.jpg'
import mark from '../../assets/img/mark.svg'
import cart from '../../assets/img/cart.svg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Soon = () =>{
    const [cookies, setCookie] = useCookies(['cart']);
    const [products, setProducts] = useState([])
    const [cartInfo, setCartInfo] = useState('')
    const [product, setProduct] = useState({
        title:'',
        category: {
            title:''
        }
    })

    const addCart = (id) => {
        setCartInfo('Kitob savatchada!')
        let cart = cookies.cart || []
        setTimeout(()=> {setCartInfo('')},3000)
        
        let  index = cart.findIndex(item => item.id == id)
        if(index == -1) 
            cart.push({count:1,id})
        else 
            cart[index].count += 1
        setCookie('cart',cart)
    }

    useEffect(()=> {
        axios.get('http://localhost:3003/api/products/soon')
        .then(res => {
            if(res.data.length>0){
                setProduct(res.data[0])
                setProducts(res.data)
            }else {
                setProducts([])
            }
        })
    },[]) 

    return(
        <div className="soon">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="btitle mt-4">Tez kunda tokchamizda</div>
                        <div className="soon__stitle mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>
                        <div className="soon__box">
                            <Link to='/' className="soon__img" style={{
                                backgroundImage: `url('http://localhost:3003/${product.img}')`
                            }}></Link>
                            <div className="soon__info">
                                <div className="soon__top">
                                    <img src={mark} alt="" />
                                    <div className="soon__right">
                                        <div className="soon__title">{product.title}</div>
                                        <div className="soon__genre">{product.category.title}</div>
                                    </div>
                                </div>
                                <div className="soon__value">Qisqa tasnifi</div>
                                <div className="soon__text">{product.description}</div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="soon__key">Muallif</div>
                                        <div className="soon__value">{product.author}</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="soon__key">Yil</div>
                                        <div className="soon__value">{product.year}</div>
                                    </div>
                                </div>
                                <div className="soon__bottom">
                                    <div className="soon__price">
                                        {product.sale>0?(
                                            <div className="soon__old">{product.price} so’m</div>
                                        ):('')}
                                        <div className="soon__new">{product.sale>0?(product.price*(100-product.sale)/100):(product.price)} so'm</div>
                                    </div>
                                    <button 
                                        onClick={()=>{addCart(product._id)}}
                                        className="btn btn__bg soon__cart"
                                    >
                                        {cartInfo?cartInfo:(
                                            <span>
                                                <img src={cart} alt="" />
                                                Savatcha
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            {products.map((product,index) => {
                                return (
                                    <div className="col-4" key={product._id}
                                        onClick={()=>{setProduct(products[index])}}
                                    >
                                        <div className="soon__book" style={{ 
                                            backgroundImage:`url('http://localhost:3003/${product.img}')`}}
                                        ></div>
                                    </div>              
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Soon