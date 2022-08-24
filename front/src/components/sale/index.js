import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";

import '@splidejs/splide/dist/css/splide.min.css';
import './sale.scss';

// images 
import book from '../../assets/img/book.jpg'
import star from '../../assets/img/star.svg'

const Sale = () => {
    return(
        <div className="sale">
            <div className="container">
                <div className="btitle">Qiziqarli taklif</div>
                <Splide 
                    options={{
                            type: 'loop',
                            perPage: 6,
                            autoplay: true,
                            interval: 4000,
                            gap:40,
                    }}
                    className="sale__slider"
                    >
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                    <SplideSlide>
                        <Link to='/' className="sale__box">
                            <div className="sale__img" style={{
                                backgroundImage: `url(${book})`
                            }}>
                                <div className="sale__discount">50%</div>
                                <div className="sale__review">
                                    <img src={star} alt="" />
                                    <span>4.7</span>    
                                </div>   
                            </div>  
                            <div className="sale__title">Qo’rqma</div> 
                            <div className="sale__genre">Roman, Sarguzash</div>
                            <div className="sale__price">
                                <div className="sale__old">60 000 so’m</div>    
                                <div className="sale__new">35 000 so’m</div>    
                            </div> 
                        </Link>      
                    </SplideSlide>
                </Splide>
            </div>
        </div>
        
    )
}
export default Sale