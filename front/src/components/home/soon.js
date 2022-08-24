import React from "react";
import { Link } from "react-router-dom";
import './home.scss';

// images
import book from '../../assets/img/book.jpg'
import mark from '../../assets/img/mark.svg'
import cart from '../../assets/img/cart.svg'

const Soon = () =>{
    return(
        <div className="soon">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="btitle mt-4">Tez kunda tokchamizda</div>
                        <div className="soon__stitle mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>
                        <div className="soon__box">
                            <Link to='/' className="soon__img" style={{
                                backgroundImage: `url(${book})`
                            }}></Link>
                            <div className="soon__info">
                                <div className="soon__top">
                                    <img src={mark} alt="" />
                                    <div className="soon__right">
                                        <div className="soon__title">Ibtido</div>
                                        <div className="soon__genre">Roman, Sarguzash</div>
                                    </div>
                                </div>
                                <div className="soon__value">Qisqa tasnifi</div>
                                <div className="soon__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="soon__key">Muallif</div>
                                        <div className="soon__value">Den Braun</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="soon__key">Yil</div>
                                        <div className="soon__value">2022</div>
                                    </div>
                                </div>
                                <div className="soon__bottom">
                                    <div className="soon__price">
                                        <div className="soon__old">45 000 so’m</div>
                                        <div className="soon__new">35 000 so’m</div>
                                    </div>
                                    <div className="btn btn__bg soon__cart">
                                        <img src={cart} alt="" />
                                        <span>Savatcha</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                            <div className="col-4">
                                <Link to="/" className="soon__book" style={{ backgroundImage: `url(${book})`}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Soon