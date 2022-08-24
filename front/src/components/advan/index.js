/* eslint-disable array-callback-return */
import React from "react";
import './advan.scss';

//images 
import icon from '../../assets/img/advan1.svg';

const Advan = () => {
    let list = [
        {
            title: 'Tezkor yetkazib berish',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'              
        },
        {
            title: 'Haqqoniy to’lov',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            title: 'Takrorlanmas sifat',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            title: 'Yuqori kafolat',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
    ]

    return(
        <div className="advan">
            <div className="row">
                {list.map((item, index) => (
                    <div className="col-3 col-md-6" key={index}>
                    <div className="advan__box">
                        <div className="advan__img">
                            <img src={icon} alt="" />
                        </div>
                        <div className="advan__info">
                            <div className="advan__title">{item.title}</div>
                            <div className="advan__text">{item.text}</div>  
                        </div>
                    </div>
                </div>
                ))}         
            </div>
        </div>
    )
}
export default Advan    