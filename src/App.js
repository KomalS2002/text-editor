
//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';
import './App.css';
import  {useState} from 'react';
import { Remarkable } from 'remarkable';

const md= new Remarkable ()

export default function App() { 
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(true);

  const handleBoldClick = ()=>{
    let output=document.querySelector(".output1")
    if(isBold){
      output.style.fontWeight = "bold"
      setIsBold(false);
    }else{
      output.style.fontWeight = "normal"
      setIsBold(true);
    }
 };
const [isItalic, setIsItalic] =useState(true);
const handleItalicClick = ()=>{
   let output=document.querySelector(".output1")
   if(isItalic){
     output.style.fontStyle = "italic"
     setIsItalic(false);
    }else{
      output.style.fontStyle = "normal"
      setIsItalic(true);
    }
}; 
const [isUnderline, setIsUnderline]= useState(true);
const handleUnderlineClick = ()=>{
    let output=document.querySelector(".output1")
    if(isUnderline){
      output.style.textDecoration = "underline"
      setIsUnderline(false);
    } 
    else{
      output.style.textDecoration= "none"
      setIsUnderline(true);
    }
}
const [isStrike , setIsStrike] = useState(true);
const handleStrikeClick = ()=>{
    let output = document.querySelector(".output1")
    if(isStrike){
      output.style.textDecoration = "line-through"
      setIsStrike(false);
    }
    else{
      output.style.textDecoration = "none"
      setIsStrike(true);
    }
}
const [isUpperCase, setIsUpperCase] = useState(true);
const handleUpperClick = ()=>{
    let output = document.querySelector(".output1")
    if(isUpperCase){
      output.style.textTransform = "uppercase"
      setIsUpperCase(false);
    }
    else{
    output.style.textTransform = "none"
    setIsUpperCase(true);
    }
}
const [isLowerCase, setIsLowerCase] = useState(true);
const handleLowerClick = ()=>{
    let output = document.querySelector(".output1")
    if(isLowerCase){
      output.style.textTransform = "lowercase"
      setIsLowerCase(false);
    }
    else{
      output.style.textTransform = "none"
      setIsLowerCase(true);
    }
}
const handleClearClick = ()=>{
  // let output = document.querySelector(".output1")
  // output.style.textTransform = " "
 console.log("Clear was clicked"+ text);
  let newText='';
  setText(newText);
}
  return (
    <>
    <div className= 'entity'>
    <h1 className='header'>Text Editor</h1>
    <div className='complete'>
      <nav className="navbar">
                <button className="btn1"onClick={handleBoldClick}>B</button>
                <button className="btn2"onClick={handleItalicClick}>I</button>
                <button className="btn3"onClick={handleUnderlineClick}>U</button>
                <button className="btn4"onClick={handleStrikeClick}>Strike</button>
                <button className="btn5"onClick={handleUpperClick}>AA</button>
                <button className="btn6"onClick={handleLowerClick}>aa</button>
                <button className="btn7"onClick={handleClearClick}>Clear</button>
                {/* <button className="btn8"onClick={handleColorClick}>Color</button> */}
                <input type="color" className='color'/>
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
       <p className='info'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    </div>
    </div>
    </div>
    </>
  );
}





