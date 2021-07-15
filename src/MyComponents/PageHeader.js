import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// import "../App.css";
import '../Css/Shape.css';
import '../Css/Style.css';
import Love from '../Image/WebsitePics/Love.png';
import { Link } from "react-router-dom";
// import post from '../../../server/models/post';

const PageHeader = () => {
    // const [posts, setPosts] = useState([])

    // const fetchPosts = () => {
    //     axios.get(`${process.env.REACT_APP_API}/posts`)
    //         .then(response => {
    //             console.log(response)
    //             setPosts(response.data)
    //         })

    //         .catch(error => alert('Error fetching posts'));
    // };


    // useEffect(() => {
    //     fetchPosts();

    // }, []);






    return (
        <>
            {/* <div>
                {
                    posts.map((post, i) => (
                        <div key={post._id}>
                            <div>

                                <Link to = {`/post/${post.slug}`}><h2> {post.title}</h2></Link>
                            </div>

                            <p>{post.content.substring(1, 50)}</p>

                            <p> Published on {''} <span>{new Date(post.createdAt).toLocaleString()} </span></p>
                            <hr/>
                        </div>


                    ))
                }


            </div> */}
            

            <div id="hdr-pg-bx" className=" hdr-pg-lnk ">
                <div> </div>
                <div className="hd-mdl-bx">
                    <div className='bg2'><Link className='lnk'  to= '/Education'><div className='fnt-lnk' >Education</div></Link></div>
                    <div className='bg1'> <Link className='lnk'  to= '/Love'><div className='fnt-lnk' >Love</div></Link></div>
                    <div className='bg1'><Link className='lnk'  to= '/Family'><div className='fnt-lnk' >Family</div></Link></div>
                    <div className='bg1'><Link className='lnk'  to= '/Fiction'><div className='fnt-lnk' >Fiction</div></Link></div>
                    <div className='bg2'><Link className='lnk'  to= '/Job'><div className='fnt-lnk' >Job</div></Link></div>
                    <div className='bg1'><Link className='lnk'  to= '/Power'><div className='fnt-lnk' >Power</div></Link></div>
                    <div className='bg2'><Link className='lnk'  to= '/Friends'><div className='fnt-lnk' >Friends</div></Link></div>
                    <div className='bg2'><Link className='lnk'  to= '/Health'><div className='fnt-lnk' >Health</div></Link></div>
                    <div className='bg1'><Link className='lnk'  to= '/Money'><div className='fnt-lnk' >Money</div></Link></div>
                    <div className='bg2'><Link className='lnk'  to= '/Social'><div className='fnt-lnk' >Social Recognition</div></Link></div>
                    <div className='bg1'><Link className='lnk'  to= '/Vacation'><div className='fnt-lnk' >Vacation</div></Link></div>
                    <div className='bg2'><Link className='lnk'  to= '/Others'><div className='fnt-lnk' >Others</div></Link></div>

                </div>

                <div></div>


            </div>
        </>
    )
};


export default PageHeader;
