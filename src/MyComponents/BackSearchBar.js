import React, { Component } from 'react';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";

export default class BackSearchBar extends Component {
    render() {
        return (
          
                <div id="al-pst-bx" className="br-btn al-pst-pg">
                    <div> </div>
                    <div className="al-pst-mdl-bx ">

                <Link to = '/'><span className ='bk-icn-img'></span></Link>
                       <Link to = '/SearchBar'className=' srch-br-img' placeholder=""></Link>
                <span className="btn-sft"> <Link to="/Create">{<button className="b-s-b " type="submit" >Start Writing</button>}</Link> </span>
                    
                    </div>

                    <div></div>
                </div>
           
        )
    }
}