  import React from 'react'
  //import './App.css';
  import  {useState} from 'react';
  import { Remarkable } from 'remarkable';
  // import {useHistory } from "react-router-dom";
   
  const md= new Remarkable ()
  function TextForm(props) {
    const{handleLogout}=props;
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
      // output.getElementsByClassName("output1").innerHTML = ""
      // document.getElementsByClassName(".output1").value = "";
      // console.log("good");
      console.log("Clear was clicked"+ text);
      let newText='';
      setText(newText);
    }
    const getText = ()=>{
      if(document.getSelection){
        var text= document.getSelection().toString();
        alert(text);
      }
      else{
        if(document.selection){
          var text2 = document.selection.creteRange();
          alert(text2);
        }
      }
    }
// function color(){document.getElementsByClassName(".output1").style.color = "blue"; }
// const handleColorClick= ()=>{
//   let output=document.querySelector(".output1")
//   output.style.color = "blue";
//   }
  const [isColor, setIsColorCase] = useState(true);
  const handleColorClick = ()=>{
    let output = document.querySelector(".output1")
    if(isColor){
      output.style.foreColor= "input"
      setIsColorCase(false);
      
    }
    else{
      output.style.textTransform = "none"
      setIsLowerCase(true);
    }
    }
  function downloadFile (filename,content){
    const element = document.createElement('a');
    const blob = new Blob([content], {type:'plain/txt'});
    const fileURL = URL.createObjectURL(blob);
    element.setAttribute('href',fileURL);
    element.setAttribute('btn10',filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  window.onload = ()=>{
    document.getElementsByClassName(".btn10").addEventListener('click', e=>{
      const filename = document.getElementsByClassName(".filename").value;
      const content = document.getElementsByClassName(".output1").value;
      if(filename && content){
        downloadFile(filename,content);
      }
    })
  }
  
    return (
      <div>
        <div className='entity'>
          <div className='main'>
    <h1 className='header'>Text Editor</h1>
          <div className='main1'>
      <nav className="navbar">
                <button className="bold"onClick={handleBoldClick}>B</button>
                <button className="italic"onClick={handleItalicClick}>I</button>
                <button className="underline"onClick={handleUnderlineClick}>U</button>
                <button className="strike"onClick={handleStrikeClick}>abc</button>
                <button className="uppercase"onClick={handleUpperClick}>AA</button>
                <button className="lowercase"onClick={handleLowerClick}>aa</button>
                <button className="clear"onClick={handleClearClick}>Clear</button>
                <button className='select'onClick={getText}>Select</button>
                <button className="color" onClick={handleColorClick}>Color</button>
                <button className="download"onClick={downloadFile}>Download</button>               
                <input type="text" className="filename" placeholder='untitled'></input>
                {/* <input type="color" className='btn1' onClick={handleColorClick}/>      */}
                <button className='logout'onClick={handleLogout}>logout</button>
      </nav>
    <div className='complete'>

    
     <textarea name='textarea' className='container1' cols="700" rows="10" placeholder='  Type some text here' value={text}onChange={(e)=>setText(e.target.value)}
         ></textarea>
         
        
         <div className='container2'>        
         {/* <h3 className='output'>Output</h3> */}
       <div className="output1" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       <p className='info'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div> 
    )
  }
  
  export default TextForm
  