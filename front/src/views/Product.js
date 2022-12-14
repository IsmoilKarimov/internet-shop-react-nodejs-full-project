/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react"
import { useCookies } from 'react-cookie';
import Advan from "../components/advan"
import '../components/breadcrumbs'
import Breadcrumbs from "../components/breadcrumbs"
import Sale from "../components/sale"
import Sub from "../components/sub"
import Modal from "../components/product/modal"

import '../assets/css/product.scss'

// images
// import book from '../assets/img/book.jpg'
import cart from '../assets/img/cart.svg'
import vcart from '../assets/img/vcart.svg'
import star from '../assets/img/star.svg'
import like from '../assets/img/like.svg'
import review from '../assets/img/review.svg'
import shipping from '../assets/img/shipping.svg'
import sotcks from '../assets/img/sotcks.svg'
// import person from '../assets/img/person.jpg'
// import sort from '../assets/img/sort.svg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {

    const [cookies, setCookie] = useCookies(['cart','fav']);
    const [favToggle, setFavToggle] = useState(false)

    let {id} = useParams()

    const [count, setCount] = useState(1)
    const [toggleTab, setToggleTab] = useState(0)
    const [product, setProduct] = useState([])
    const [atributs, setAtributs] = useState([])
    const [others, setOthers] = useState([])
    const [modal, toggleModal] = useState(false)
    const [cartInfo, setCartInfo] = useState('')

    const addCart = () => {
        setCartInfo('Kitob savatchada!')
        let cart = cookies.cart || []
        setTimeout(()=> {setCartInfo('')},3000)
        let  index = cart.findIndex(item => item.id == id)
        if(index == -1) 
            cart.push({count,id})
        else 
            cart[index].count += count
        setCookie('cart',cart)
        setCount(1)
    }

    const addFav = () => {
        setFavToggle(!favToggle)
        let fav = cookies.fav || []
        let  index = fav.findIndex(item => item.id == id)
        if(index == -1) 
            fav.push({id})
        else 
            fav.splice(index,1)
        setCookie('fav',fav)
    }

    useEffect(()=> {

        let fav = cookies.fav || []
        let  index = fav.findIndex(item => item.id == id)
        if(index !== -1) 
            setFavToggle(true)
        else 
            setFavToggle(false)

        window.scroll({
            top:0,
            left:0,
            behavior: "smooth"
        })
        axios.get(`http://localhost:3003/api/products/get/${id}`)
        .then(res => {
            let data = res.data
            let {product,others} = data
            let reviews = product.reviews.reverse()
            reviews.map(review => {
                let date = new Date(review.createdAt)
                review.createdAt = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                return review
            })
            setProduct(product)
            setOthers(others)
            setAtributs(product.atributs)
        })
    },[id])

    return(
        <>
            <Breadcrumbs />
            <div className="container">
                <div className="product">
                    <div className="product__img" style={{
                        backgroundImage: `url('http://localhost:3003/${product.img}')`
                    }}></div>
                    <div className="product__right">
                        <div className="product__title">{product.title}</div>
                        <div className="d-flex align-items-center">
                            <div className="product__stars">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <span className="product__bold">4.0</span>
                            <div className="product__reviews">
                                <img src={review} alt="" />
                                235 Reviews
                            </div>
                            <div className="product__like">
                                <img src={like} alt="" />
                                456k Like
                            </div>
                        </div>
                        <div className="product__text">
                            <pre>
                                {product.description}
                            </pre>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <div className="lprobox__item">
                                <div className="lprobox__name">Muallif</div>
                                <div className="lprobox__value">{product.author}</div>
                            </div >              
                            <div className="lprobox__item">
                                <div className="lprobox__name">Chop etilgan yili</div>
                                <div className="lprobox__value">{product.year}</div>
                            </div>       
                            <div className="product__shipping">
                                <img src={shipping} alt="" />
                                {product.delivery==0?'Bepul yetkazish':product.delivery==1?'Toshkent 10 000 so\'m. Respublika bo\'ylab 35 000 so\'m':product.delivery==2?'Toshkent 20 000 so\'m. Respublika bo\'ylab 55 000 so\'m':''}
                            </div>         
                            <div className="product__sotcks">
                                <img src={sotcks} alt="" />
                                {product.status==1?'Mavjud':'Xozirda yo`q'}
                            </div>
                        </div>
                        <div className="product__line"></div>
                        <div className="product__bottom">
                            <div className="product__newprice">{product.sale>0?(product.price*(100-product.sale)/100):product.price} so'm</div>
                            <div className="product__oldprice">{product.sale>0?(product.price+' so`m'):''}</div>
                            {product.sale>0?(<div className="product__sale">{product.sale}%</div>):''}
                            <div className="product__count">
                                <button className="product__count--less" onClick={()=>{
                                    if(count > 0) setCount(count-1)}
                                }></button>
                                <div className="product__count--value">{count}</div>
                                <button className="product__count--more" onClick={()=>{setCount(count+1)}}></button>
                            </div>
                            <button 
                                onClick={addCart}
                                className="btn btn__bg product__button"
                            >   {cartInfo.length>0?cartInfo:(
                                    <span>
                                        <img src={cart} alt="" />
                                        Savatchaga  
                                    </span>  
                                )}
                            </button>         
                            <button 
                                className={favToggle?('btn btn__outline product__fav added'):'btn btn__outline product__fav'}
                                onClick={addFav}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5204 4.27343C19.9935 3.74648 19.368 3.32848 18.6796 3.04329C17.9912 2.75811 17.2533 2.61132 16.5082 2.61132C15.763 2.61132 15.0252 2.75811 14.3368 3.04329C13.6483 3.32848 13.0228 3.74648 12.496 4.27343L11.9999 4.76952L11.5038 4.27343C10.9769 3.74648 10.3514 3.32848 9.66302 3.04329C8.9746 2.75811 8.23675 2.61132 7.49159 2.61132C6.74644 2.61132 6.00858 2.75811 5.32016 3.04329C4.63174 3.32848 4.00624 3.74648 3.47938 4.27343C1.77821 5.97411 1.48138 8.59423 2.68638 11.2827C4.15513 14.561 11.034 20.8608 11.326 21.1274C11.5102 21.2955 11.7505 21.3886 11.9999 21.3886C12.2492 21.3886 12.4895 21.2955 12.6737 21.1274C12.9657 20.8608 19.8446 14.561 21.3133 11.2822C22.5184 8.59423 22.2216 5.97411 20.5204 4.27343ZM19.4892 10.4644C18.5194 12.6274 14.2401 16.915 11.9999 19.0244C9.75966 16.915 5.48134 12.6289 4.51063 10.4648C4.10243 9.55224 3.32118 7.25976 4.89344 5.68749C5.58252 4.99843 6.5171 4.61132 7.49159 4.61132C8.46608 4.61132 9.40066 4.99843 10.0897 5.68749L11.2929 6.89062C11.3857 6.9835 11.4959 7.05718 11.6173 7.10745C11.7386 7.15771 11.8686 7.18359 11.9999 7.18359C12.1312 7.18359 12.2613 7.15771 12.3826 7.10745C12.5039 7.05718 12.6141 6.9835 12.707 6.89062L13.9101 5.68749C14.6102 5.01966 15.5406 4.64709 16.5082 4.64709C17.4758 4.64709 18.4062 5.01966 19.1063 5.68749C20.6786 7.25976 19.8974 9.55224 19.4892 10.4644Z" fill="#6C5DD3"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 col-md-12">
                        <div className="product__tabs">
                            <button className={toggleTab==0?'htitle active':'htitle'} onClick={()=>{setToggleTab(0)}}>Kitob tasnifi</button>
                            <button className={toggleTab==1?'htitle active':'htitle'} onClick={()=>{setToggleTab(1)}}>Kitob haqida</button>
                            <button className={toggleTab==2?'htitle active':'htitle'} onClick={()=>{setToggleTab(2)}}>Mijozlar fikrlari</button>
                        </div>
                        <div className="product__content">
                            {
                            toggleTab==0?(
                                <div className="product__text">
                                    <pre>
                                        {product.text}
                                    </pre>
                                </div>
                            ):toggleTab==1?(
                                <div className="product__atribute">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Kitob turi</td>
                                            <td>{product.category.title}</td>
                                        </tr>
                                        {atributs.map(atribut => {
                                            return (
                                                <tr key={atribut._id}>
                                                    <td>{atribut.atribut.title}</td>
                                                    <td>{atribut.value}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            ):(
                                <div className="product__review">
                                    <div className="reviews">
                                        <div className="reviews__main mb-2">
                                            <div className="reviews__main--info">
                                                <div className="reviews__main--title">Rating Information</div>
                                                <div className="reviews__main--text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
                                            </div>
                                            <div className="reviews__main--score">
                                                <div className="reviews__main--item">
                                                    <img src={star} alt="" />
                                                    <span>5</span>
                                                    <div className="reviews__main--line">
                                                        <span style={{
                                                            width:'86%'
                                                        }}></span>
                                                    </div>
                                                    <div className="reviews__main--value">86%</div>
                                                </div>
                                                <div className="reviews__main--item">
                                                    <img src={star} alt="" />
                                                    <span>5</span>
                                                    <div className="reviews__main--line">
                                                        <span style={{
                                                            width:'65%'
                                                        }}></span>
                                                    </div>
                                                    <div className="reviews__main--value">65%</div>
                                                </div>
                                            </div>
                                            <div className="reviews__main--right">
                                                <div className="d-flex align-items-center">
                                                    <div className="reviews__main--big">4.7</div>
                                                    <div className="reviews__main--out">out od 5</div>
                                                </div>
                                                <div className="reviews__main--stars">
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" reviews__top d-flex mb-2 align-items-center">
                                            <span>Fikrlar ro'yhati: {product.reviews.length}</span>
                                            <button onClick={()=> {toggleModal(true)}} className="ml-auto btn btn__bg">Fikr qo'shish</button>
                                        </div>
                                        <div className="reviews__list">
                                            {product.reviews.map(review => { 
                                                let img = []
                                                for(let i=1; i<=review.mark; i++){
                                                    img.push( <img src={star} alt="" key={i} />)
                                                }
                                                return(
                                                    <div className="reviews__box" key={review._id}>
                                                        <div className="reviews__box--left">
                                                            <div className="reviews__box--author">
                                                                <div className="reviews__box--avatar" style={{
                                                                    backgroundImage: `url('http://localhost:3003/${review.avatar}')`
                                                                }}>
                                                                    
                                                                </div>
                                                                <div>
                                                                    <div className="reviews__box--name">{review.name}</div>
                                                                    <div className="reviews__box--date">{review.createdAt}</div>
                                                                </div>
                                                            </div>
                                                            <div className="reviews__box--text">{review.text}</div>
                                                        </div>
                                                        <div className="reviews__box--right">
                                                            <div className="reviews__box--value">{review.mark}.0</div>
                                                            <div className="reviews__box--stars">
                                                                {img}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className="btn btn__bg btn__full">View More</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-3 col-md-12">
                        <div className="htitle">Boshqa kitoblar</div>
                        {others.map(item => {
                            return (
                                <div className="rel" key={item._id}>
                                    <Link to={`/product/${item._id}`} className="rel__img" style={{
                                        backgroundImage:`url('http://localhost:3003/${item.img}')`
                                    }}>
                                    </Link>
                                    <div className="rel__info">
                                        <Link to={`/product/${item._id}`} className="rel__title">{item.title}</Link>
                                        <div className="rel__genre">{item.category.title}</div>
                                        <div className="rel__review">
                                            <img src={star} alt="" />
                                            <div className="rel__review--bold">4.7</div>
                                            <span>244 reviews</span>
                                        </div>
                                        <div className="rel__price">
                                            <div className="rel__newprice">{item.sale>0?(item.price*(100-(item.sale))/100):item.price} so'm</div>
                                            {item.sale>0?(<div className="rel__oldprice">{item.price} so'm</div>):''}
                                        </div>
                                        <button className="rel__cart">
                                            <img src={vcart} alt="" />
                                            Savatchaga
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="advan__long">
                <div className="container">
                    <Advan />
                </div>
            </div>
            <Sale />
            <Sub />
            {modal?(<Modal toggleModal={toggleModal} _id={product._id}/>):''}
        </>
    )
}
export default Product