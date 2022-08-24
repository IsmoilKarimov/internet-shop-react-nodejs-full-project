import React from "react";
import './home.scss';

// images 
import icon1 from '../../assets/img/stat1.svg'
import icon2 from '../../assets/img/stat2.svg'
import icon3 from '../../assets/img/stat3.svg'
import icon4 from '../../assets/img/stat4.svg'

const Stat = () =>{
    return(
        <div className="stat">
            <div className="container">
                <div className="d-flex">
                    <div className="stat__box">
                        <img src={icon1} alt='' />
                        <div className="stat__title">25 000</div>
                        <div className="stat__val">Haridorlar</div>
                    </div>
                    <div className="stat__box">
                        <img src={icon2} alt='' />
                        <div className="stat__title">15 000+</div>
                        <div className="stat__val">Kitoblar to’plami</div>
                    </div>
                    <div className="stat__box">
                        <img src={icon3} alt='' />
                        <div className="stat__title">5+</div>
                        <div className="stat__val">yillik tajriba</div>
                    </div>
                    <div className="stat__box">
                        <img src={icon4} alt='' />
                        <div className="stat__title">350+</div>
                        <div className="stat__val">mashhur yozuvchilar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stat