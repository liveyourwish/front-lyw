import React, { Component } from 'react';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";

export default class SearchBarButton extends Component {
    render() {
        return (
          
                // <div id="al-pst-bx" className="br-btn al-pst-pg">
                //     <div> </div>
                //     <div className="al-pst-mdl-bx ">
           <span className="br-sft">     <Link to = '/SearchBar'className=' srch-br-img' placeholder=""></Link></span>
                       
                //     </div>

                //     <div></div>
                // </div>
           
        )
    }
}
