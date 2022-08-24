import React from "react"
import Advan from "../components/advan"
import Breadcrumbs from "../components/breadcrumbs"

import '../assets/css/checkout.scss'

const Checkout = () =>{
    return(
        <>
            <Breadcrumbs/>
            <div className="steps">
                <div className="steps__item">
                    <span className="steps__status completed"></span>
                    <div className="steps__title">Shopping Summary</div>
                </div>
                <div className="steps__item">
                    <span className="steps__status current"></span>
                    <div className="steps__title">Shopping Summary</div>
                </div>
                <div className="steps__item">
                    <span className="steps__status"></span>
                    <div className="steps__title">Shopping Summary</div>
                </div>
                <div className="steps__item">
                    <span className="steps__status"></span>
                    <div className="steps__title">Shopping Summary</div>
                </div>
            </div>
            <form className="form">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-5 col-md-12">
                            <div className="htitle">Buyer Info</div>
                            <div className="row">
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>First name</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Last name</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Email address</label>
                                        <input type="email"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Mobile Phone Number</label>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form__input">
                                        <label>Address</label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>State</label>
                                        <select name="" id="">
                                            <option value="England">England</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Postcode/ZIP</label>
                                        <input type="number"/>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Town/City</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form__input">
                                        <label>Note</label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-12">
                            <div className="htitle">Payment</div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form__radio">
                                        <input type="radio" name="payment" id='bank'/>
                                        <label htmlFor="bank">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38.2503 16.6856L34.3149 12.75L11.2335 35.8314V25.8507H5.66699V45.3333H25.1496V39.7668H15.169L38.2503 16.6856Z" fill="#11142D"/>
                                            <path d="M40.0675 22.6667V28.2332H52.8314L29.75 51.3146L33.6856 55.25L56.7668 32.1687V44.9326H62.3333V22.6667H40.0675Z" fill="#11142D"/>
                                            </svg>
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form__radio">
                                        <input type="radio" name="payment" id='card'/>
                                        <label htmlFor="card">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M57.375 10.625H10.625C8.93424 10.625 7.31274 11.2967 6.11719 12.4922C4.92165 13.6877 4.25 15.3092 4.25 17V51C4.25 52.6908 4.92165 54.3123 6.11719 55.5078C7.31274 56.7034 8.93424 57.375 10.625 57.375H57.375C59.0658 57.375 60.6873 56.7034 61.8828 55.5078C63.0784 54.3123 63.75 52.6908 63.75 51V17C63.75 15.3092 63.0784 13.6877 61.8828 12.4922C60.6873 11.2967 59.0658 10.625 57.375 10.625ZM8.5 23.375H59.5V29.75H8.5V23.375ZM10.625 14.875H57.375C57.9386 14.875 58.4791 15.0989 58.8776 15.4974C59.2761 15.8959 59.5 16.4364 59.5 17V19.125H8.5V17C8.5 16.4364 8.72388 15.8959 9.1224 15.4974C9.52091 15.0989 10.0614 14.875 10.625 14.875V14.875ZM57.375 53.125H10.625C10.0614 53.125 9.52091 52.9011 9.1224 52.5026C8.72388 52.1041 8.5 51.5636 8.5 51V34H59.5V51C59.5 51.5636 59.2761 52.1041 58.8776 52.5026C58.4791 52.9011 57.9386 53.125 57.375 53.125ZM21.25 46.75C21.25 47.3136 21.0261 47.8541 20.6276 48.2526C20.2291 48.6511 19.6886 48.875 19.125 48.875H14.875C14.3114 48.875 13.7709 48.6511 13.3724 48.2526C12.9739 47.8541 12.75 47.3136 12.75 46.75C12.75 46.1864 12.9739 45.6459 13.3724 45.2474C13.7709 44.8489 14.3114 44.625 14.875 44.625H19.125C19.6886 44.625 20.2291 44.8489 20.6276 45.2474C21.0261 45.6459 21.25 46.1864 21.25 46.75ZM31.875 46.75C31.875 47.3136 31.6511 47.8541 31.2526 48.2526C30.8541 48.6511 30.3136 48.875 29.75 48.875H25.5C24.9364 48.875 24.3959 48.6511 23.9974 48.2526C23.5989 47.8541 23.375 47.3136 23.375 46.75C23.375 46.1864 23.5989 45.6459 23.9974 45.2474C24.3959 44.8489 24.9364 44.625 25.5 44.625H29.75C30.3136 44.625 30.8541 44.8489 31.2526 45.2474C31.6511 45.6459 31.875 46.1864 31.875 46.75Z" fill="#6C5DD3"/>
                                            </svg>
                                            Credit Card
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                   <div className="form__radio">
                                        <input type="radio" name="payment" id='paypal'/>
                                        <label htmlFor="paypal">
                                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M60.365 20.9097C58.2598 18.2897 54.9048 16.5548 51.1381 16.0734C49.9442 8.79583 43.5615 5 37.4259 5H15.3106L5 52.125H18.7246L16.2719 63H33.8443L37.3566 48.5H42.9223C47.7023 48.5 52.0544 47.0838 55.5078 44.4043C59.0882 41.6264 61.5276 37.6107 62.5626 32.7906C63.8418 26.8235 62.0736 23.0362 60.365 20.9097ZM10.6306 47.5938L18.9584 9.53125H37.4259C41.2078 9.53125 45.3373 11.5675 46.4906 15.9883H26.8748L19.7466 47.5938H10.6306ZM46.6423 20.5195C46.5857 20.9822 46.5133 21.4225 46.4249 21.8381C44.8158 29.3358 39.8963 32.9805 31.3854 32.9805H27.6882L30.4986 20.5195H46.6423ZM58.1312 31.8402C56.5248 39.3214 50.6969 43.9688 42.9222 43.9688H33.7911L30.2788 58.4688H21.9396L26.6662 37.5117H31.3854C36.5119 37.5117 40.7685 36.3152 44.0372 33.9555C47.5096 31.4486 49.8038 27.6916 50.8567 22.7854C50.9991 22.1169 51.1077 21.4067 51.1849 20.6628C53.536 21.0832 55.5654 22.1714 56.8319 23.7476C58.4213 25.7257 58.8584 28.4487 58.1312 31.8402Z" fill="#11142D"/>
                                            </svg>
                                            Pay pal
                                        </label>
                                   </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form__input">
                                        <label>NAME ON CARD</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-8 col-md-12">
                                   <div className="form__input">
                                        <label>Card number</label>
                                        <input type="number" placeholder="0000 - 0000 - 0000 - 0000" />
                                   </div>
                                </div>
                                <div className="col-4 col-md-12">
                                    <div className="form__input">
                                        <label>CVV</label>
                                        <input type="text" />
                                        <span className="info"></span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Month</label>
                                        <select name="" id="">
                                            <option value="England">August</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 col-md-12">
                                    <div className="form__input">
                                        <label>Year</label>
                                        <select name="" id="">
                                            <option value="">August</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn__bg btn__full">Buyurtmani tasdiqlash</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="advan__long">
                <div className="container">
                    <Advan />
                </div>
            </div>
        </>
    )
}
export default Checkout