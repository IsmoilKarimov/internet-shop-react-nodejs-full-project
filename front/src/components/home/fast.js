import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//images
//  import book from '../../assets/img/book.jpg'

const Fast = () => {
    
    const [promo, setPromo] = useState({
        products: []
    })
    const [time,setTime] = useState({
        day:0,
        hour:0,
        minute:0,
        seconds:0
    })


    useEffect(()=>{
        axios.get('http://localhost:3003/promo/last')
        .then(res => {
            let p = res.data
            p.products = p.products.map(product => {
                product.img = product.img[0]
                return product
            })
            let date = new Date(p.deadline)
            setTime({
                day: date.getDay(),
                hour:date.getHours(),
                minute:date.getMinutes(),
                seconds:date.getSeconds()
            })

            setPromo(res.data)
            let d = date.getDay()
            let h = date.getHours()
            let m = date.getMinutes()
            let s = date.getSeconds()
            
            let timer = setInterval(() => {
                
                if(s === 0 && m === 0 && h === 0 && d === 0){
                    clearInterval(timer)
                }
                if(s === 0 ){
                    m--
                    s = 60
                }
                if(m === 0 ){
                    h--
                    m = 60
                }
                if(h === 0 ){
                    d--
                    h = 24
                }
                
                setTime({
                    day:d,
                    hour:h,
                    minute:m,
                    seconds:s
                })
                s--
            }, 1000)
        })
    },[])

    return(
        <div className="fast">
            <div className="container">
                <div className="btitle text-center mb-1">{promo.title}</div>
                <div className="fast__stitle text-center">{promo.description}</div>
                <div className="fast__timer">
                    <div className="fast__items">
                        <div className="fast__val">{time.day}</div>
                        <div className="fast__name">Kun</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">{time.hour}</div>
                        <div className="fast__name">Soat</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">{time.minute}</div>
                        <div className="fast__name">Minut</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">{time.seconds}</div>
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