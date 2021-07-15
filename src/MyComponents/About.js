import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../Css/Shape.css';
import '../Css/Style.css';
import renderHTML from 'react-render-html';

const About = () => {
    const [statics, setStatics] = useState([])

    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_API}/statics?title=about`)
            .then(response => {
                console.log(response)
                setStatics(response.data)
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
                        statics.map((post, i) => (
                            <div className = 'n-pst-bx' key={post._id}>
                                <div className = 'al-pst'>

                                <h2><div> {renderHTML(post.title)}</div></h2>
                                </div>

                                <p className ='al-pst-pr'>{renderHTML(post.content)}</p>

                               
                            </div>


                        ))
                    }
                </div>

                <div></div>
            </div>
        </>
    )
};


export default About;




