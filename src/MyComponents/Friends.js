import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import { Link } from "react-router-dom";
const Friends = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_API}/posts?title=hey`)
            .then(response => {
                console.log(response)
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
                <div className="al-pst-mdl-bx">
                    {
                        posts.map((post, i) => (
                            <div className = 'n-pst-bx' key={post._id}>
                                <div className = 'al-pst'>

                                    <Link to={`/post/${post.slug}`}><h2> {post.title}</h2></Link>
                                </div>

                                <p className ='al-pst-pr'>{post.content.substring(1, 50)}</p>

                                <p className = 'al-pst-dt'> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>
                                <p className = 'al-pst-gr'> <span><Link to= '/grab' className ='gr-fnt'>Grab Your Milestone </Link></span></p>

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


export default Friends;




