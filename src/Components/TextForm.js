  import React, { useState }  from "react";

 export default function TextForm (props) {
    const handleBoldClick = ()=>{
        console.log("bold was clicked" + text);
        let newText= text.bold();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    };
    const handleItalicClick = ()=>{
        console.log("italic was clicked"+ text);
        let newText=text.italics();
        setText(newText);
    }; 
    const handleUnderlineClick = ()=>{
        console.log("underLine was clicked"+ text);
        let newText=text.underline();
        setText(newText);
    }
    const handleStrikeClick = ()=>{
        console.log("Strike was clicked"+ text);
        let newText=text.strike();
        setText(newText);
    }
    const handleUpperClick = ()=>{
        console.log("upperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = ()=>{
        console.log("lowerCase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    
    const [ text, setText]= useState('Enter text here');

     return (
         <div>
             <nav className="navbar">
                 <button className="btn" onClick={handleBoldClick}>Bold</button>
                <button className="btn"onClick={handleItalicClick}>Italic</button>
                <button className="btn"onClick={handleUnderlineClick}>Underline</button>
                <button className="btn"onClick={handleStrikeClick}>Strike Through</button>
                <button className="btn"onClick={handleUpperClick}>Upper Case</button>
                <button className="btn"onClick={handleLowerClick}>Lower Case</button>



            </nav>
            <h1>{props.heading}</h1>
            <div className= "main">
               
                <textarea className= "form-control" value = {text} onChange={handleOnChange} id= "myText" rows="20" column ='100' > </textarea>
            </div>
         </div>
    )
} 