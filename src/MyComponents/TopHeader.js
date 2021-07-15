import React from 'react';
// import "../App.css";
import '../Css/Shape.css';


import { Link } from "react-router-dom";
import logo from '../Image/logo.png';

export default function TopHeader(props) {
   
    return (

        <>
            <div id="topHeader" className=" container1 topHeader">


                <span className="nav-item1">
                    <Link className="nav-link1 active1" aria-current="page1" to="/">{<img className="lg-img" src={logo} width="50%" height="30%" />}</Link>
                </span>

            </div>


        </>

    )
}