import React from 'react';
import { useState } from "react";


const TextForm = (props) => {

  const UpClick = () => {
    // console.log(text); 
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const LClick = () => {
    // console.log(text); 
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const clearClick = () => {
    // console.log(text); 
    let newtext = "";
    setText(newtext);
  }

  const CopyClick = () => {
    // console.log(text); 
    let newtext = document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  }

  const handelOnchange = (event) => {
    // console.log("handelOnchange");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className='container'>
        <h1 className='my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className="form-control border border-primary" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handelOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={LClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={CopyClick}>Copy text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div>
    </>
  )
}

export default TextForm;
