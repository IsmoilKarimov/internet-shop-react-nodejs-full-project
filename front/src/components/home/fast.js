import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//images
import book from '../../assets/img/book.jpg'

const Fast = () => {
    
    const [promo, setPromo] = useState({
        products: []
    })

    useEffect(()=>{
        axios.get('http://localhost:3003/promo/last')
        .then(res => {
            let p = res.data
            p.products = p.products.map(product => {
                product.img = product.img[0]
                return product
            })
            setPromo(res.data)
        })
    })

    return(
        <div className="fast">
            <div className="container">
                <div className="btitle text-center mb-1">{promo.title}</div>
                <div className="fast__stitle text-center">{promo.description}</div>
                <div className="fast__timer">
                    <div className="fast__items">
                        <div className="fast__val">02</div>
                        <div className="fast__name">Kun</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">05</div>
                        <div className="fast__name">Soat</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">42</div>
                        <div className="fast__name">Minut</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">19</div>
                        <div className="fast__name">Soniya</div>
                    </div>
                </div>
                <div className="d-flex">
                    {promo.products.map(product => {
                        return(
                            <Link to={`/product/${product._id}`} className="fast__box" key={product._id}>
                                <div className="fast__img" style={{
                                    backgroundImage:`url('http://localhost:3003/${product.img}')`
                                }}></div>
                                <div className="fast__title">{product.title}</div>
                                <div className="fast__genre">{product.category.title}</div>
                                <div className="fast__old">
                                    {product.sale>0?(product.price+` so'm`):(product.price*(100-product.sale)/100+' so`m')}  
                                </div>
                                <div className="fast__new">
                                    {product.sale>0?(product.price*(100-product.sale)/100):product.price} so'm
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Fast