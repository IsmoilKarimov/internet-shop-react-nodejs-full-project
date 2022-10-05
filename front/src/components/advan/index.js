/* eslint-disable array-callback-return */
import React from "react";
import axios from "axios"
import './advan.scss';

//images 
// eslint-disable-next-line no-unused-vars
import icon from '../../assets/img/advan1.svg';

import { useState } from "react";
import { useEffect } from "react";

const Advan = () => {
    let [list,setList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3003/api/advan/all')
        .then(res => {
            if(res.data.length>0 && res.data!=='error' ){
                setList(res.data)
            }
        })
    })

    return(
        <div className="advan">
            <div className="row">
                {list.map((item, index) => (
                    <div className="col-3 col-md-6" key={item._id}>
                    <div className="advan__box">
                        <div className="advan__img">
                            <img src={"http://localhost:3003/"+item.icon} alt="" />
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