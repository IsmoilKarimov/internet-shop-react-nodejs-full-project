import React from "react";
import './sub.scss'

const Sub = () => {
    return(
        <div className="container">
            <div className="sub">
                <div className="sub__title">Bizning yangililarimizga obuna bo’ling va ko’plab akiyalarimizdan xabardor bo’ling</div>
                <div className="sub__form">
                    <input type='text' placeholder="Email manzilingiz"/>
                    <button>Obuna bo’lish</button>
                </div>
            </div>
        </div>
    )
}
export default Sub