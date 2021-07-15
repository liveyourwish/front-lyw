import React, { useState} from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.bubble.css';


import '../Css/Shape.css';
import '../Css/Style.css';

export  const  Suggestion = () => {
       
    //state

    const [state, setState] = useState({
        // title: ''
        // content: '',
    })



const[content, setContent] = useState('')


//rich text editor handle change
const handleContent = (event) => {
    console.log(event);
    setContent(event);
}


   
    const handleSubmit = event => {
        event.preventDefault();
        console.log({ content });
        axios
        .post(`${process.env.REACT_APP_API}/static`, {content})
        .then(response => {
            console.log(response);
           // empty the state
           setContent({...state, content: ''});
           //show success alert
           alert(`Suggestion has been submitted successfully.`);
        //    window.location.reload();
        })
      
        .catch(error =>{
            console.log(error.response)
            alert(error.response.data.error);
        })
   
    };







    return (

        <>
            <div id="sg-pg-bx" className=" sg-pg-lnk ">
                <div> </div>
                <div className="sg-mdl-bx">
                    

                    <form onSubmit={handleSubmit}>
                    <div >
                    <ReactQuill
                        onChange={handleContent}
                        value={content}
                        placeholder="Your Suggestions....."  
                        theme="bubble"  
                        className='sg-ttl'
                        />
                           
                        </div>
                                 
                        <div className='hd'>
                        <button className ='btn-pb'>Submit</button>
                    </div>


                    </form>




                </div>

                <div></div>
            </div>
        </>
        
    )
};

