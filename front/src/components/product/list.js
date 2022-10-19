import React from "react";
import { Link } from "react-router-dom";

// imgs
// import book from '../../assets/img/book.jpg'
import cart from '../../assets/img/cart.svg'
import star from '../../assets/img/star.svg'

const List = ({product}) => {

    let average = 0
    if(product.reviews.length>0){
        product.reviews.forEach(review => {
            average += review.mark
        })
        average = Math.floor(average/product.reviews.length*10)/10
    }

    let stars = []
    for(let i=1; i<=Math.ceil(average); i++){
        stars.push(<img src={star} alt="" />)
    }

    return(
        <div className="lprobox">
            <Link to={`/product/${product._id}`} className="lprobox__img" style={{
                backgroundImage: `url('http://localhost:3003/${product.img}')`
            }}></Link>
            <div className="lprobox__right">
                <div className="lprobox__top">
                    <div>
                        <Link to={`/product/${product._id}`} className="lprobox__title">{product.title}</Link>
                    </div>
                    <div>
                        <div className="lprobox__stars">
                            {stars}
                        </div>
                        <div className="lprobox__review">
                            <span className="lprobox__review--value">{average}</span>
                            <span className="lprobox__review--count"> {product.reviews.length} Fikrlar</span>  
                        </div>
                    </div>
                </div>
                <div className="lprobox__text">{product.description}</div>
                <div className="d-flex align-items-center mb-2 mt-1">
                    <div className="lprobox__newprice">
                        {product.sale>0?(product.price*(100-product.sale)/100):(product.price)} so'm
                    </div>
                    <div className="lprobox__oldprice">
                        {product.sale>0?(product.price + ' so`m'):('')}
                    </div>
                    {/* <Link to='/' className="lprobox__promo">Get 20% Discount for today</Link>
                    <Link to='/' className="lprobox__promo">50% OFF Discount</Link>
                    <button className="lprobox__more">See 2+ promos</button> */}
                </div>
                <div className="d-flex align-items-center lprobox__bottom">
                    <div className="lprobox__item">
                        <div className="lprobox__name">Muallif</div>
                        <div className="lprobox__value">{product.author}</div>
                    </div >               
                    <div className="lprobox__item">
                        <div className="lprobox__name">Yozilgan yili</div>
                        <div className="lprobox__value">{product.year}</div>
                    </div>       
                    <div className="btn btn__bg lprobox__button">
                        <img src={cart} alt="" />
                        Savatchaga    
                    </div>         
                    <div className="btn btn__outline lprobox__fav">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5204 4.27343C19.9935 3.74648 19.368 3.32848 18.6796 3.04329C17.9912 2.75811 17.2533 2.61132 16.5082 2.61132C15.763 2.61132 15.0252 2.75811 14.3368 3.04329C13.6483 3.32848 13.0228 3.74648 12.496 4.27343L11.9999 4.76952L11.5038 4.27343C10.9769 3.74648 10.3514 3.32848 9.66302 3.04329C8.9746 2.75811 8.23675 2.61132 7.49159 2.61132C6.74644 2.61132 6.00858 2.75811 5.32016 3.04329C4.63174 3.32848 4.00624 3.74648 3.47938 4.27343C1.77821 5.97411 1.48138 8.59423 2.68638 11.2827C4.15513 14.561 11.034 20.8608 11.326 21.1274C11.5102 21.2955 11.7505 21.3886 11.9999 21.3886C12.2492 21.3886 12.4895 21.2955 12.6737 21.1274C12.9657 20.8608 19.8446 14.561 21.3133 11.2822C22.5184 8.59423 22.2216 5.97411 20.5204 4.27343ZM19.4892 10.4644C18.5194 12.6274 14.2401 16.915 11.9999 19.0244C9.75966 16.915 5.48134 12.6289 4.51063 10.4648C4.10243 9.55224 3.32118 7.25976 4.89344 5.68749C5.58252 4.99843 6.5171 4.61132 7.49159 4.61132C8.46608 4.61132 9.40066 4.99843 10.0897 5.68749L11.2929 6.89062C11.3857 6.9835 11.4959 7.05718 11.6173 7.10745C11.7386 7.15771 11.8686 7.18359 11.9999 7.18359C12.1312 7.18359 12.2613 7.15771 12.3826 7.10745C12.5039 7.05718 12.6141 6.9835 12.707 6.89062L13.9101 5.68749C14.6102 5.01966 15.5406 4.64709 16.5082 4.64709C17.4758 4.64709 18.4062 5.01966 19.1063 5.68749C20.6786 7.25976 19.8974 9.55224 19.4892 10.4644Z" fill="#6C5DD3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List