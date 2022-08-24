import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss'

// images
import rightarrow from '../../assets/img/right_arrow.svg'
import pict from '../../assets/img/pict.png'


const News = () => {
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
                    <div className='col-3'>
                        <div className='news__box'>
                            <div className='news__img' style={{
                                backgroundImage: `url(${pict})`
                            }}></div>
                            <Link to='/' className='news__title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Link>
                            <div className='news__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='news__box'>
                            <div className='news__img' style={{
                                backgroundImage: `url(${pict})`
                            }}></div>
                            <Link to='/' className='news__title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Link>
                            <div className='news__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='news__box'>
                            <div className='news__img' style={{
                                backgroundImage: `url(${pict})`
                            }}></div>
                            <Link to='/' className='news__title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Link>
                            <div className='news__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='news__box'>
                            <div className='news__img' style={{
                                backgroundImage: `url(${pict})`
                            }}></div>

                            
                            <Link to='/' className='news__title'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</Link>
                            <div className='news__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default News
