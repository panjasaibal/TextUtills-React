import { useState } from "react";

import React from 'react'

export default function MyTextForms(props) {
  // var text = "Enter the some texts"
  const [text, setText] = useState("Enter the some texts here") 

  var onUpClickListener = ()=>{
      setText(text.toUpperCase())

  };

  var onLowClickListener = ()=>{
         
      setText(text.toLowerCase())
      
  };

  var onRmvSpaceClickListener = ()=>{


    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Space Removed', 'success')
  }

  var onClrTxtClickListener = ()=>{

    setText('')
    props.showAlert('Text Removed', 'danger')
  }

  var onCopyClickListener = ()=>{
         
    var text = document.getElementById('myText')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert('Text Copied', 'success')
};

  var onChnageListener = (event)=>{
          setText(event.target.value)
  }

  var countWords = (text)=>{
    
    var newArr = text.trim().split(" ")
 
    return newArr.length
  
  }

  return(
      <>
          <h3 style={{color:props.mode==='light'?'black':'white'}} >{props.heading}</h3>
          <br/>

          <div className="form-group" >
          
            <textarea className="form-control" id="myText" rows="8" value={text} onChange={onChnageListener} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
          </div>

          <div className="my-2">
            <button className="btn btn-primary" onClick={onUpClickListener}>Change To upper</button>
            <button className="btn btn-primary mx-2" onClick={onLowClickListener}>Change to lower</button>
            <button className="btn btn-primary mx-2" onClick={onCopyClickListener}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={onRmvSpaceClickListener}>Remove Extra Space</button>
            <button className="btn btn-danger mx-2" onClick={onClrTxtClickListener}>Clear Text</button>
          
          </div>

          <h4 className="my-4" style={{color:props.mode==='light'?'black':'white'}}>Preview</h4>
          <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
              
              <p>Your text have: {countWords(text)} words and {text.trim().length} charecters </p>

          </div>

        
      </>
  );
}

