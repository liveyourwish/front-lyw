import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';

const Education = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_API}/posts?title=education`)
            .then(response => {
                // console.log(response)
                setPosts(response.data)
            })

            .catch(error => alert('Error fetching posts'));
    };


    useEffect(() => {
        fetchPosts();

    }, []);
    return (
        <>
            <div id="al-pst-bx" className=" al-pst-pg">
                <div> </div>
                <div className="al-pst-mdl-bx mn-ht">
                    {
                        posts.map((post, i) => (
                            <div className = 'n-pst-bx' key={post._id}>
                                <div className = 'al-pst'>

                                <Link to={`/post/${post.slug}`}><h2> {renderHTML(post && post.title)}</h2></Link>
                                </div>

                                <p className ='al-pst-pr'>{renderHTML(post && post.content)}</p>


                                <p className = 'al-pst-dt'> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>
                                {/* <p className = 'al-pst-gr'> <span><Link to= '/grab' className ='gr-fnt'>Grab Your Milestone </Link></span></p> */}

                                {/* <hr /> */}
                            </div>


                        ))
                    }
                </div>

                <div></div>
            </div>
        </>
    )
};


export default Education;




