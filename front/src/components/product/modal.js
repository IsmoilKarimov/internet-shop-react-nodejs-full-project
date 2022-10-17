/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";

import './grid.scss'

const Modal = ({_id,toggleModal}) => {

    const [status, setStatus] = useState(false)

    const sendReview = (e) => {
        e.preventDefault()
        let form = document.forms.review
        let formData = new FormData(form)
        formData.append('product',_id)

        axios.post('http://localhost:3003/api/newreview',formData)
        .then(res => {
            if(res.data=='ok'){
                setStatus(true)
            }else {
                setStatus(false)
            }
        })
    }
    
    return(
        <>
            <div className="modal">
                <div className="modal__box">
                    <div className="modal__title">Fikringizni yozing</div>
                    <button className="modal__close" onClick={()=> {toggleModal(false)}}></button>
                    {status?(
                        <div className="modal__info">
                            Sizning fikringiz tizimga jo'natildi. Tekshiruvdan keyin saytda paydo bo'ladi.
                        </div>
                    ):(
                        <form name="review" onSubmit={(event)=> {sendReview(event)}} data-id={_id}>
                            <input type="hidden" name="_id" value={_id}/>
                            <input type="text" className="modal__input" name="name" placeholder="Ismingizni kiriting" />
                            <label htmlFor="avatar" className="modal__file btn">Rasmni tanlang</label>
                            <input type="file" name="avatar" id="avatar"/>
                            <select name="mark" className="modal__input">
                                <option value="0">Baho bering</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <textarea name="text" className="modal__textarea" placeholder="O'z fikringizni yozing"></textarea>
                            <button type="submit" className="btn btn__bg">Jo'natish</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}
export default Modal