import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";
import ReactScrollableFeed from 'react-scrollable-feed';
import renderHTML from 'react-render-html';


export const SinglePost = (props) => {

    const [post, setPost] = useState('');


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
            .then(response => setPost(response.data))
            .catch(error => alert('Error loading single post'))
    }, []);

const showSinglePost = () =>
(  
   <div>

    <div className = 'al-pst'>
    <ReactScrollableFeed>
    <div> <h2 className="sp-fnt-stl"> {renderHTML(post.title)}</h2></div>
    </ReactScrollableFeed>
  
    </div>

    <div className ='al-pst-pr'>{renderHTML(post.content)}</div>

    <p className = 'al-pst-dt'> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>

    </div>


)



    return (

           
           <>
           
            <div id="s-pst-bx" className=" s-pst-pg">
                <div> </div>
                <div className="al-pst-mdl-bx">
                <Link to = '/AllPosts'><span className ='bk-icn-img'></span></Link>
           <Link to = '/SearchBar'className=' srch-br-img' placeholder=""></Link>
             <span className="btn-sft"> <Link to="/Create"> {<button className="b-s-b " type="submit" >Start Writing</button>}</Link> </span>
                          
                          
                            <div className = 's-pst-bx'>
                            
                                
                                {post && showSinglePost()}
                              
                                
                            </div>

                            <hr/>
                </div>
                <div></div>
            </div>      
        </>  
    )
};