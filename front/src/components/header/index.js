/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './header.scss'

// images
import logo from '../../assets/img/logo.svg'
import menu from '../../assets/img/menu.svg'
import down from '../../assets/img/down.svg'
import searchimg from '../../assets/img/search.svg'
import fav from '../../assets/img/fav.svg'
import cart from '../../assets/img/cart.svg'
import user from '../../assets/img/user.svg'
import axios from "axios";




const Header = () => {

    const [catBtn, SetCatBtn] = useState(false)
    const [categoryList, setCategoryList] = useState([])
    const [result, setResult] = useState([])
    const [searchText, setSearchText] = useState('')
    const history = useNavigate()
    
    const redir = (link) => {
        setResult([])
        setSearchText('')
        history(link)
    }
    
    const search = (text) => {
        setSearchText(text)
        if(text.length>0){
            axios.post('http://localhost:3003/api/search',{text})
            .then(res => {
                if(res.data.length>0){
                    setResult(res.data)
                }else {
                    setResult([])
                }
            })
        }else {
            setResult([])
        }
    }

    
    useEffect(()=>{
        axios.get('http://localhost:3003/api/category/all')
        .then(res => {
            if(res.data.length > 0)
                setCategoryList(res.data)
        })
    },[])

    return(
        <header className="header">
            <div className="container"> 
                <Link to='/' className="header__logo">
                    <img src={logo} alt='' />
                    <span className="header__logo--right">
                        <span className="header__logo--name">Pir.uz</span>
                        <span className="header__logo--slogan">Kitoblar olami online do'koni</span>
                    </span>
                </Link>
                <div className="header__search">
                    <button className={catBtn?"header__menu btn show":"header__menu btn"} onClick={()=>{SetCatBtn(!catBtn)}}>
                        <img src={menu} alt=''/>
                        <span>Turkumlar</span>
                        <img src={down} alt='' />
                        <ul className="cats">
                            {categoryList.map( cat => {
                                return (
                                    <li key={cat._id}>
                                        <Link to={`/category/${cat._id}`}>{cat.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </button>
                    <div className="header__searchbox">
                        <input type='text' 
                            className="header__input" 
                            onInput = {(event) => {search(event.target.value)} }
                            value={searchText}
                            placeholder="Qidiruv" 
                        />
                        {result.length>0?(
                            <ul className="header__result">
                                {result.map(item => {
                                    return(
                                        <li key={item._id}>
                                            <span className="header__result--link" onClick={()=> {redir(`/product/${item._id}`)}}>
                                                <span className="header__result--title">{item.title}</span>
                                                <span className="header__result--price">{item.price} so'm</span>
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        ):''}
                    </div>
                    <button className="header__find btn">
                        <img src={searchimg} alt='' />
                    </button>
                 </div>
                 <Link to='/' className="header__btn btn btn__outline">
                     <span className="header_btn--count">35</span>
                     <img src={fav} alt="" />
                 </Link>
                 <Link to='/' className="header__btn btn btn__outline">
                     <span className="header__btn--count">4</span> 
                     <img src={cart} alt="" />
                 </Link>
                 <button className="header__user btn btn__bg btn__shadow">
                     <img src={user} alt='' />
                     Chiqish
                 </button>
            </div>
        </header>
    )
}
export default Header