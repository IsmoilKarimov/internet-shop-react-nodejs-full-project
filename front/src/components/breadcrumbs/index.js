import React from "react";
import { Link } from "react-router-dom";
import './breadcrumbs.scss';

const Breadcrumbs = () => {
    return(
        <div className="breadcrumbs">
            <div className="container">
                <ul>
                    <li><Link to='/'>Bosh sahifa</Link></li>
                    <li><Link to='/'>Roman</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Breadcrumbs