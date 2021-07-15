import '../Css/Shape.css';
import '../Css/Style.css';
import React from 'react';
import { Link } from "react-router-dom";



export const Footer = () => {

  return (

    <footer id="ftr" className="ftr">
      <div id="ftr-mnu" className="ftr-cntnr ftr-mnu">
        <div className=" ftr-mnu-rw ftr-mnu-tbl" >
          <div className=" ftr-mnu-cnt one" ></div>
          <div className=" ftr-mnu-cnt two"><Link className="ftr-lnk" to='/about'>About Us</Link></div>
          <div className=" ftr-mnu-cnt thr" ></div>
          <div className=" ftr-mnu-cnt fou"></div>
          <div className=" ftr-mnu-cnt fiv" ><Link className="ftr-lnk" to='/suggestion'>Suggestion</Link> </div>

          <div className=" ftr-mnu-cnt six"> </div>
          <div className=" ftr-mnu-cnt sev" > </div>
          <div className=" ftr-mnu-cnt eig"><Link className="ftr-lnk" to='/terms'>Terms Of Use</Link>  </div>
          <div className=" ftr-mnu-cnt nin" ></div>
          <div className=" ftr-mnu-cnt ten"></div>


          <div className=" ftr-mnu-cnt ele" > </div>
          <div className=" ftr-mnu-cnt twe"></div>
          <div className=" ftr-mnu-cnt thi" > </div>
          <div className=" ftr-mnu-cnt f14"></div>
          <div className=" ftr-mnu-cnt fif" ></div>
        </div>

        <div className=" ftr-mnu-rw ftr-mnu-cp-rt">

          <p className="text-center">Copyright 2021 &copy; liveyourwish.in </p>

        </div>
      </div>
    </footer>
  )

}






