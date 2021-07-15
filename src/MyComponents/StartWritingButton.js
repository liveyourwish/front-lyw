import React from 'react'
import { Link } from "react-router-dom";
// import "../App.css";
import '../Css/Shape.css';
import '../Css/Style.css';
export const StartWritingButton = () => {

    return (

        // <div id="mn-cont" className="mn-cont scrl-btn">
        //     <div id="srt-wrt-asd1" className="srt-wrt">  </div>



        //     <div id="srt-wrt-sec" className="srt-wrt srt-wrt-sec ">




        //         <div className="  btn-sft">
                  
                <div className="plc">   <Link className="  btn-sft" to="/Create">{<span className="btn-sm" type="submit" >Start Writing</span>}</Link></div>
                   
                
        //          </div>

 

        //     </div>



        //     <div id="srt-wrt-asd2" className="srt-wrt"> </div>





        // </div>

    )

}
