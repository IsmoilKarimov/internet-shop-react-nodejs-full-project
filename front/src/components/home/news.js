/* eslint-disable array-callback-return */
import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss'

// images
import rightarrow from '../../assets/img/right_arrow.svg'
import pict from '../../assets/img/pict.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const News = () => {

    const [news, setNews] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3003/api/news/all')
        .then(res => {
            if(res.data.length>0 && res.data !== 'error'){
                setNews(res.data)
            }
        })
    })

    return(
        <div className='news'>
            <div className='container'>
                <div className='btitle'>Ohirgi yangiliklar</div>
                <div className='d-flex align-items-center justify-content-between mb-4'>
                    <div className='news__stitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    <Link to='/' className='btn btn__bg news__btn'>
                        Barcha yangiliklar
                        <img src={rightarrow} alt="" />
                    </Link>
                </div>
                <div className='row'>
                    {news.map(item => (
                        <div className='col-3' key={item._id}>
                        <div className='news__box'>
                            <div className='news__img' style={{
                                backgroundImage: `url('http://localhost:3003/${item.img}')`
                            }}></div>
                            <Link to='/' className='news__title'>{item.title}</Link>
                            <div className='news__desc'>{item.description}...</div>
                        </div>
                    </div>
                    ))}    
                </div>
            </div>
        </div>
    )
}
export default News
