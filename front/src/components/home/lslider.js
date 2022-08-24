import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './home.scss'

// images
import rightarrow from '../../assets/img/right_arrow.svg'
import children from '../../assets/img/children.jpg'
import univer from '../../assets/img/univer.jpg'

const Lslider = () => {
    return(                                                        
        <Splide
            className="mslider"
            options={{
                type: 'fade',
                autoplay: true,
                interval: 5000,
                arrows: false,
                rewind: true
              }}
        >
            <SplideSlide>
                <div className="mslider__row">
                    <div className="mslider__info">
                        <div className="mslider__slogan">Maktabga muhim</div> 
                        <div className="mslider__title">50% aksiya</div> 
                        <div className="mslider__stitle">maktab kitoblari</div>  
                        <div className="mslider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </div>
                        <div className="d-flex">
                            <Link to='/' className="btn btn__bg">Sotib olish
                            <img src={rightarrow} alt=''/>
                            </Link>
                            <Link to='/' className="btn btn__outline">Boshqa aksiyalar</Link>          
                        </div>
                    </div>      
                    <div className='mslider__img' 
                        style={{ backgroundImage: `url(${children})`
                    }}>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="mslider__row">
                    <div className="mslider__info">
                        <div className="mslider__slogan">Universitetga muhim</div> 
                        <div className="mslider__title">100% aksiya</div> 
                        <div className="mslider__stitle">universitet kitoblari</div>  
                        <div className="mslider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </div>
                        <div className="d-flex">
                            <Link to='/' className="btn btn__bg">Sotib olish
                            <img src={rightarrow} alt=''/>
                            </Link>
                            <Link to='/' className="btn btn__outline">Boshqa aksiyalar</Link>          
                        </div>
                    </div>      
                    <div className='mslider__img' 
                        style={{ backgroundImage: `url(${univer})`
                    }}>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    )
}
export default Lslider
