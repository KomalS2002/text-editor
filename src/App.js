//import logo from './logo.svg';

import './App.css';
import  {useState} from 'react';
import { Remarkable } from 'remarkable';
//import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
//import TextForm from 'TextForm.js'
const md= new Remarkable ()
export default function App() { 
  const handleBoldClick = ()=>{
    console.log("bold was clicked" + text);
    let newText= text.style.fontWeight="bold"();
    setText(newText)
  
}
// const handleOnClick = (event)=>{
//     console.log("On Change");
//     setText(event.target.value);
// };
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
const handleClearClick = ()=>{
  console.log("Clear was clicked"+ text);
  let newText='';
  setText(newText);
}


  const [text, setText] = useState("");
  return (
    <>
    <h1 className='header'>Text Editor</h1>
    <div className='complete'>
      <nav className="navbar">
                <button className="btn1" onClick={handleBoldClick}>Bold</button>
                <button className="btn2"onClick={handleItalicClick}>Italic</button>
                <button className="btn3"onClick={handleUnderlineClick}>Underline</button>
                <button className="btn4"onClick={handleStrikeClick}>Strike Through</button>
                <button className="btn5"onClick={handleUpperClick}>Upper Case</button>
                <button className="btn6"onClick={handleLowerClick}>Lower Case</button>
                <button className="btn7"onClick={handleClearClick}>Clear</button>
       </nav>

    <div className='container'>
     
      
       
        {/* <div className='input'>   */}
       {/* <h3 className='inputText'>Text Input</h3> */}
       {/* <article > */}
         {/* <label htmlFor='markdown' className='label'></label> */}
         <textarea name='textarea' id='markdown' cols="700" rows="10" placeholder='Type some text here' value={text}onChange={(e)=>setText(e.target.value)}
         ></textarea>
         {/* </article> */}
         {/* </div> */}
         </div>
         <div className='container'>        
         <h3 className='output'>Output</h3>
       <div className="output1" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       <p className='info'>{text.split(" ").length} words {text.length} characters</p>
    </div>
    </div>
    </>
  );
}

