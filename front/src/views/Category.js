import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Advan from "../components/advan";
import Breadcrumbs from "../components/breadcrumbs";
import Sale from "../components/sale";
import Sub from "../components/sub";
import Grid from "../components/product/grid";
// import InputRange from 'react-input-range';

import '../assets/css/category.scss';               

//images
import sort from '../assets/img/sort.svg'
import List from "../components/product/list";
import axios from "axios";

const Category = () => {

    // const [value, setValue] = useState({ min: 50, max: 1000 },)
    const [toggleProduct, setToggleProduct] = useState(false)
    const [category,setCategory] = useState([])
    const [products,setProducts] = useState([])

    let {id} = useParams()

    useEffect(()=>{
        window.scroll({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        axios.get(`http://localhost:3003/api/category/byid/${id}`)
        .then(res => {
            if(res.data){
                setCategory(res.data.category)
                setProducts(res.data.products)
            }
        })
    },[id])
    
    return(
        <>
            <Breadcrumbs />                     
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-12">
                        <div className="btitle">Filterlash</div>
                        <div className="filtr__box">
                            <div className="filtr__title" onClick={(event) => {event.target.classList.toggle('open')}}>To'plamlar bo'yicha</div>
                            <div className="filtr__body">
                                <div className="dropdown">
                                    <div className="dropdown__title" onClick={(event) => {event.target.classList.toggle('open')}}>Best sales<span>(105)</span></div>
                                    <ul className="dropdown__list">
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown__title" onClick={(event) => {event.target.classList.toggle('open')}}> Most Commented<span>(21)</span></div>
                                    <ul className="dropdown__list">
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                        <li><Link to='/'>Alone here</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <div className="filtr__box">
                            <div className="filtr__title" onClick={(event) => {event.target.classList.toggle('open')}}>Bo'limlar bo'yicha</div>
                            <div className="filtr__body">
                                <div className="filtr__row">
                                   <div className="filtr__checkbox">
                                        <input type="checkbox" name="ch1" id="ch1"/>
                                        <label htmlFor="ch1">Action</label>
                                   </div>
                                   <div className="filtr__checkbox">
                                        <input type="checkbox" name="ch2" id="ch2"/>
                                        <label htmlFor="ch2">Action</label>
                                   </div>
                                   <div className="filtr__checkbox">
                                        <input type="checkbox" name="ch3" id="ch3"/>
                                        <label htmlFor="ch3">Action</label>
                                   </div>
                                   <div className="filtr__checkbox">
                                        <input type="checkbox" name="ch4" id="ch4"/>
                                        <label htmlFor="ch4">Action</label>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="filtr__box">
                            <div className="filtr__title">Narhlar bo'yicha</div>   
                            {/* <InputRange
                                maxValue={1500} 
                                minValue={0}
                                value={value}
                                onChange={value => setValue({ value })} 
                            /> */}
                        </div>
                        <button className="btn btn__bg btn__full mb-2">Filterlash</button>
                        <button className="btn btn__outline btn__full">Tozalash</button>
                    </div>
                    <div className="col-9 col-md-12"> 
                        <div className="btitle">{category.title}</div>
                        <div className="cat__tool">
                            <ul className="cat__tool--list">
                                <li><Link to='/' className="active">Today</Link></li>
                                <li><Link to='/'>This week</Link></li>
                                <li><Link to='/'>This month</Link></li>
                            </ul>
                            <button className={toggleProduct?'cat__list active':'cat__list'} onClick={()=>{setToggleProduct(true)}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H21C21.2652 5 21.5196 4.89464 21.7071 4.7071C21.8946 4.51957 22 4.26521 22 4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26521 2.10536 4.51957 2.29289 4.7071C2.48043 4.89464 2.73478 5 3 5Z" fill="#AAAAAA"/>
                            <path d="M3 13.0002H21C21.2652 13.0002 21.5196 12.8948 21.7071 12.7073C21.8946 12.5197 22 12.2654 22 12.0002C22 11.7349 21.8946 11.4806 21.7071 11.293C21.5196 11.1055 21.2652 11.0002 21 11.0002H3C2.73478 11.0002 2.48043 11.1055 2.29289 11.293C2.10536 11.4806 2 11.7349 2 12.0002C2 12.2654 2.10536 12.5197 2.29289 12.7073C2.48043 12.8948 2.73478 13.0002 3 13.0002Z" fill="#AAAAAA"/>
                            <path d="M3 20.9999H21C21.2652 20.9999 21.5196 20.8945 21.7071 20.707C21.8946 20.5194 22 20.2651 22 19.9999C22 19.7346 21.8946 19.4803 21.7071 19.2927C21.5196 19.1052 21.2652 18.9998 21 18.9998H3C2.73478 18.9998 2.48043 19.1052 2.29289 19.2927C2.10536 19.4803 2 19.7346 2 19.9999C2 20.2651 2.10536 20.5194 2.29289 20.707C2.48043 20.8945 2.73478 20.9999 3 20.9999Z" fill="#AAAAAA"/>
                            </svg>
                            </button>
                            <button className={toggleProduct?"cat__grid":"cat__grid active"} onClick={()=>{setToggleProduct(false)}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 11.0002H10C10.2652 11.0002 10.5196 10.8948 10.7071 10.7073C10.8946 10.5197 11 10.2654 11 10.0002V3.00015C11 2.73494 10.8946 2.48058 10.7071 2.29305C10.5196 2.10551 10.2652 2.00015 10 2.00015H3C2.73478 2.00015 2.48043 2.10551 2.29289 2.29305C2.10536 2.48058 2 2.73494 2 3.00015V10.0002C2 10.2654 2.10536 10.5197 2.29289 10.7073C2.48043 10.8948 2.73478 11.0002 3 11.0002ZM4 4.00015H9V9.00015H4V4.00015Z" fill="#AAAAAA"/>
                            <path d="M14 11.0002H21C21.2652 11.0002 21.5196 10.8948 21.7071 10.7073C21.8946 10.5197 22 10.2654 22 10.0002V3.00015C22 2.73494 21.8946 2.48058 21.7071 2.29305C21.5196 2.10551 21.2652 2.00015 21 2.00015H14C13.7348 2.00015 13.4804 2.10551 13.2929 2.29305C13.1054 2.48058 13 2.73494 13 3.00015V10.0002C13 10.2654 13.1054 10.5197 13.2929 10.7073C13.4804 10.8948 13.7348 11.0002 14 11.0002ZM15 4.00015H20V9.00015H15V4.00015Z" fill="#AAAAAA"/>
                            <path d="M3 21.9998H10C10.2652 21.9998 10.5196 21.8945 10.7071 21.707C10.8946 21.5194 11 21.2651 11 20.9998V13.9998C11 13.7346 10.8946 13.4803 10.7071 13.2927C10.5196 13.1052 10.2652 12.9998 10 12.9998H3C2.73478 12.9998 2.48043 13.1052 2.29289 13.2927C2.10536 13.4803 2 13.7346 2 13.9998V20.9998C2 21.2651 2.10536 21.5194 2.29289 21.707C2.48043 21.8945 2.73478 21.9998 3 21.9998ZM4 14.9998H9V19.9998H4V14.9998Z" fill="#AAAAAA"/>
                            <path d="M14 21.9998H21C21.2652 21.9998 21.5196 21.8945 21.7071 21.707C21.8946 21.5194 22 21.2651 22 20.9998V13.9998C22 13.7346 21.8946 13.4803 21.7071 13.2927C21.5196 13.1052 21.2652 12.9998 21 12.9998H14C13.7348 12.9998 13.4804 13.1052 13.2929 13.2927C13.1054 13.4803 13 13.7346 13 13.9998V20.9998C13 21.2651 13.1054 21.5194 13.2929 21.707C13.4804 21.8945 13.7348 21.9998 14 21.9998ZM15 14.9998H20V19.9998H15V14.9998Z" fill="#AAAAAA"/>
                            </svg>
                            </button>                                   
                            <div className="cat__sort"> 
                                <img src={sort} alt='' />
                                <select className="cat__select">
                                    <option value=''>Narh kamayishi</option>
                                    <option value=''>Narh kamayishi</option>
                                    <option value=''>Narh kamayishi</option>
                                    <option value=''>Narh kamayishi</option>
                                </select>
                            </div>
                        </div>  
                        <div className="row">
                            {toggleProduct?(
                                    <Grid />
                                ):(
                                    products.map(product => {
                                        return(
                                            <List product={product} key={product._id}/>
                                        )
                                    })
                                )}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="res">Showing 12 from 50 data</div>
                            <div className="pagination">
                                <Link to='/' className="pagination__prev">Previous</Link>
                                <ul className="pagination__list">
                                    <li><Link to='/' className="active">1</Link></li>
                                    <li><Link to='/'>2</Link></li>
                                    <li><Link to='/'>3</Link></li>
                                </ul>
                                <Link to='/' className="pagination__next">Next</Link>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <Sale />
            <div className="container">
                <Advan />
            </div>
            <Sub />
        </>
    )
}
export default Category