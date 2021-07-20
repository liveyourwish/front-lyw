import React, {Component} from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';


class SearchBar extends Component {
    

    constructor() {

        super()
        this.state = {
            searchData: null,
            noData:false,
        }
    }
    search(key) {
        // console.warn(key)
        fetch(`${process.env.REACT_APP_API}/posts?title=`+ key)
            .then((data) => {
                data.json()

                    .then((resp) => {
                        // console.warn("resp", resp)
                        
                        if(resp.length>0)
                        {
                            this.setState({ searchData: resp,noData: false})
                        }
                       
                        else
                        
                        {
                            this.setState({ noData: true,searchData:null})
                        }
                        
                    })           
                })
    }

    render() {
        return (
            <>
                <div id="al-pst-bx" className=" al-pst-pg">
                    <div> </div>
                    <div className="al-pst-mdl-bx srch-bx">
                    <Link to = "/">   <span className ='bk-icn'></span></Link>
               <span>   <input type="text" className='srch-br' placeholder="Search by title here......" onChange={(event) => this.search(event.target.value)} /></span>
                        <div>
                            {
                                this.state.searchData ?
                                    <div>
                                        {
            this.state.searchData.map((post)=>
            <>

<div className = 'n-pst-bx'>
                                <div className = 'al-pst'>


                                <Link to={`/post/${post.slug}`}><h2 className="pst-fnt-stl"> {renderHTML(post && post.title)}</h2></Link>
                                </div>

                                <p className ='al-pst-pr'>{renderHTML(post && post.content.substring(0, 100))}</p>

                                        <p className = 'al-pst-dt'> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>
                                {/* <p className = 'al-pst-gr'> <span><Link to= '/grab' className ='gr-fnt'>Grab Your Milestone </Link></span></p> */}

                                {/* <hr /> */}
                            </div>


                                       </>
                                        )
                            }
                                    </div>
                                    :""
    
                        }
                        {
                        this.state.noData?<h3>No Data Found</h3>:null
                        }
                        </div>

                    </div>

                    <div></div>
                </div>
            </>
        )
    }
};


export default SearchBar;
