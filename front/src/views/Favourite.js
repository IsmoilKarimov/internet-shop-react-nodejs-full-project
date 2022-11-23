import axios from "axios";
import React, { useEffect,useState } from "react"
import { useCookies } from 'react-cookie'
import { NavLink } from "react-router-dom"

// imgs
import star from '../assets/img/star.svg'


const Favourite = () => {

    const [products, setProducts] = useState([])
    const [cookies, setCookie] = useCookies(['fav'])

    useEffect(()=> { 
        let ids = []
        if(cookies.fav){
            ids = cookies.fav
            axios.post('http://localhost:3003/api/products/ids',{ids})
            .then(res => {
                res.data = res.data.map(product => {
                    product.img = product.img[0]
                    return product
                })
                setProducts(res.data)
            })
        }
    },[cookies])

    return(
        <div className="container">
            <div className="btitle">Tanlangan kitoblar</div>
            <div className="row">
            {products.map(product => {
                return(
                    <div className="col-3" key={product._id}>
                        <NavLink to={`/product/${product._id}`} className="sale__box">
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
                        </NavLink>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Favourite