//import logo from './logo.svg';

import './App.css';
import  {useState} from 'react';
import { Remarkable } from 'remarkable';
//import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
//import TextForm from 'TextForm.js'
const md= new Remarkable
export default function App() { 
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

  const [text, setText] = useState("");
  return (
    
     <main className='main'>
       <nav className="navbar">
                 <button className="btn1" onClick={handleBoldClick}>Bold</button>
                <button className="btn2"onClick={handleItalicClick}>Italic</button>
                <button className="btn3"onClick={handleUnderlineClick}>Underline</button>
                <button className="btn4"onClick={handleStrikeClick}>Strike Through</button>
                <button className="btn5"onClick={handleUpperClick}>Upper Case</button>
                <button className="btn6"onClick={handleLowerClick}>Lower Case</button>



            </nav>
       <h1 className='texteditor'>Text Editor</h1>
       <article>
         <label htmlFor='markdown' className='label'></label>
         <textarea name='textarea' id='markdown' cols="100" rows="15" placeholder='Type some text here'
         value={text}
         onChange={(e)=>setText(e.target.value)}
         ></textarea>
       <h3>Output</h3>
       <div className="output" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       </article>
     </main>
    
  );
}

