import React from "react";
import Advan from "../components/advan";
import Fast from "../components/home/fast";
import Lslider from "../components/home/lslider";
import News from "../components/home/news";
import Promo from "../components/home/promo";
import Pslider from "../components/home/pslider";
import Review from "../components/home/review";
import Rslider from "../components/home/rslider";
import Soon from "../components/home/soon";
import Stat from "../components/home/stat";
import Sale from "../components/sale";
import Sub from "../components/sub";

const Home = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-9 col-sm-12">
                        <Lslider />
                    </div>
                    <div className="col-3 col-sm-12">
                        <Rslider />
                    </div>
                </div>
                <Advan />
                <div className="row">
                    <div className="col-6 col-md-12">
                        <Pslider />
                    </div>
                    <div className="col-6 col-md-12">
                        <Pslider />
                    </div>
                </div>
                <Promo />
                <Fast />
                <Sale />
            </div>
            <Soon />
            <Review />
            <News />
            <Stat />
            <Sub />
        </>
    )
}
export default Home