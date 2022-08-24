import React from "react";
import { Link } from "react-router-dom";

//images
import book from '../../assets/img/book.jpg'

const Fast = () => {
    return(
        <div className="fast">
            <div className="container">
                <div className="btitle text-center mb-1">Tezkor aksiya</div>
                <div className="fast__stitle text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="fast__timer">
                    <div className="fast__items">
                        <div className="fast__val">02</div>
                        <div className="fast__name">Kun</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">05</div>
                        <div className="fast__name">Soat</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">42</div>
                        <div className="fast__name">Minut</div>
                    </div>
                    <div className="fast__items">
                        <div className="fast__val">19</div>
                        <div className="fast__name">Soniya</div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to="/" className="fast__box">
                        <div className="fast__img" style={{
                            backgroundImage:`url(${book})`
                        }}></div>
                        <div className="fast__title">Ibtido</div>
                        <div className="fast__genre">Datektiv</div>
                        <div className="fast__old">120 000 so'm</div>
                        <div className="fast__new">80 000 so'm</div>
                    </Link>
                    <Link to="/" className="fast__box">
                        <div className="fast__img" style={{
                            backgroundImage:`url(${book})`
                        }}></div>
                        <div className="fast__title">Ibtido</div>
                        <div className="fast__genre">Datektiv</div>
                        <div className="fast__old">120 000 so'm</div>
                        <div className="fast__new">80 000 so'm</div>
                    </Link>
                    <Link to="/" className="fast__box">
                        <div className="fast__img" style={{
                            backgroundImage:`url(${book})`
                        }}></div>
                        <div className="fast__title">Ibtido</div>
                        <div className="fast__genre">Datektiv</div>
                        <div className="fast__old">120 000 so'm</div>
                        <div className="fast__new">80 000 so'm</div>
                    </Link>
                    <Link to="/" className="fast__box">
                        <div className="fast__img" style={{
                            backgroundImage:`url(${book})`
                        }}></div>
                        <div className="fast__title">Ibtido</div>
                        <div className="fast__genre">Datektiv</div>
                        <div className="fast__old">120 000 so'm</div>
                        <div className="fast__new">80 000 so'm</div>
                    </Link>
                    <Link to="/" className="fast__box">
                        <div className="fast__img" style={{
                            backgroundImage:`url(${book})`
                        }}></div>
                        <div className="fast__title">Ibtido</div>
                        <div className="fast__genre">Datektiv</div>
                        <div className="fast__old">120 000 so'm</div>
                        <div className="fast__new">80 000 so'm</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Fast