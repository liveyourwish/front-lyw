import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";
import ReactScrollableFeed from 'react-scrollable-feed';
import renderHTML from 'react-render-html';


const AllPost = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_API}/posts`)
            .then(response => {
                // console.log(response.data)
                // console.log(response.data.length)
                setPosts(response.data)

            })
            .catch(error => alert('Error fetching posts'));
    };
    useEffect(() => {
        fetchPosts();
    }, []);



    // const [nos, setNos] = useState()
     
    // const fetchNos = () => {
    //     axios.get(`${process.env.REACT_APP_API}/posts`)
    //         .then(response => {
    //             console.log(response.data.length)
    //             setNos(response.data.length)
    //         })
    //         .catch(error => alert('Error fetching posts'));
    // };
    // useEffect(() => {
    //     fetchNos();
    // }, []);




    const numRows = posts.length
    return (
        <>
            <div id="al-pst-bx" className=" al-pst-pg">
                <div> </div>
                <div className="al-pst-mdl-bx">
               <ReactScrollableFeed>  
               <div className="al-pst-heading " > Your Wishes-Your World 
                </div>

                <h4 className = "shake "><span className ="nu-wsh">Wishes {numRows}</span></h4>

               <div className ="spc"> </div>
                        {
                        posts.map((post, i) => (
                            <div className = 'n-pst-bx' key={post._id}>
                                <div className = 'al-pst'>

                                    <Link className= "pst-fnt-stl" to={`/post/${post.slug}`}><h2><div> {renderHTML(post && post.title)}</div></h2></Link>
                                </div>

                                <div className ='al-pst-pr'>{renderHTML(post && post.content.substring(1, 50))}</div>

                                <p className = 'al-pst-dt'> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>
                                {/* <p className = 'al-pst-gr'> <span><Link to= '/grab' className ='gr-fnt'>Grab Your Milestone </Link></span></p> */}

                                {/* <hr /> */}
                            </div>
                        ))
                    }
</ReactScrollableFeed>
                </div>

                <div></div>
            </div>
        </>
    )
};


export default AllPost;
