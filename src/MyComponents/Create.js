import React, { useCallback, useState, useEffect, useRef, Component, AllPost } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import ReactScrollableFeed from 'react-scrollable-feed';
import renderHTML from 'react-render-html';


import '../Css/Shape.css';
import '../Css/Style.css';
// import {AllPost} from './AllPost'
import { Link } from "react-router-dom";

export const Create = () => {
    // const wrapperRef = useCallback(wrapper => {
    //     if (wrapper == null) return

    //     wrapper.innerHTML = ''
    //     const editor = document.createElement('div')
    //     wrapper.append(editor)
    //     new Quill(editor, { theme: 'snow' })
    // }, [])

    
    //state

    const [state, setState] = useState({
        // title: ''
        // content: '',
    })

    const[title, setTitle] = useState('')


//rich text editor handle change
    const handleTitle = (event) => {
        // console.log(event);
        setTitle(event);
    }

const[content, setContent] = useState('')
const [disable, setDisable] = useState(true);


//rich text editor handle change
const handleContent = (event) => {
    // console.log(event);
    // console.log(content.length);
    setContent(event);
    setDisable(content.length < 99)
}

const charNum = content.length;



    //destrucutre values from state       

    // const { title, content} = state;

    // onChange event handler

    // const handleChange = (name) => (event) => {
    //     console.log('name', name, 'event', event.target.value);
    //     setState({ ...state, [name]: event.target.value });
    // };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log({ title, content });
        axios
        .post(`${process.env.REACT_APP_API}/post`, {title, content})
        .then(response => {
            // console.log(response);
           // empty the state
           setState({...state,title: '', content: ''});
           //show success alert
        //    alert(`Post submitted.`);
           window.location.reload();
        })
      
        .catch(error =>{
            // console.log(error.response)
            alert(error.response.data.error);
        })
   
    };

const mystyle = useRef(null)
useEffect(()=>{
mystyle.current.focus()
},[])





    return (

        <>
            <div id="wrt-pg-bx" className=" wrt-pg-lnk ">
                <div> </div>
                <div className="wrt-mdl-bx">
                    

                    <form onSubmit={handleSubmit}>
                    <div >
                    <ReactQuill
                        onChange={handleTitle}
                        value={title}
                        placeholder="Post Title....."  
                        theme="bubble"  
                        className='ttl'
                        />
                           
                        </div>
                
                
                 <div className='pg-stl' > 
                        <ReactQuill
                        onChange={handleContent}
                        value={content}
                        placeholder="Write Your Wish....."
                                           
                        className='pg'
                        ref={mystyle}
                        />
<caption className="cp-stl"> {charNum} Characters | Min 100 characters</caption>
 </div >
 
                   
                   
                        <div className='hd'>
                        <ReactScrollableFeed> <button disabled={disable} className ='btn-pb'>Publish</button></ReactScrollableFeed>
                    </div>


                    </form>




                </div>

                <div></div>
            </div>
        </>
        
    )
};

// export default Create;


                            {/* <input onChange={handleChange('content')} value={content} type='text' placeholder='Write content here....' required /> */}
                