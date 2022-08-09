  import React from 'react'
  import  {useState,useEffect} from 'react';
  import { Remarkable } from 'remarkable';
  // import {useHistory } from "react-router-dom";
  // import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
  // import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
  // import FormatUnderlinedRoundedIcon from '@mui/icons-material/FormatUnderlinedRounded';
  // import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
  // import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
  //import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
  // import AbcRoundedIcon from '@mui/icons-material/AbcRounded';
  // import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';
  // import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
   //import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
   import styled from 'styled-components';
   //import Navigation from './Navigation';
   //import MobileNavigation from './MobileNavigation';
   //import NavLinks from './NavLinks'
   //import Navbar from './Navbar';
   //import "firebase/storage"
   

   
  

 
  
  const Info = styled.div`
  width: 100%;
  color: black;
  height: 2.5em;
  font-weight: 700;
  padding: 5px;
  background-color: #d393eb;
  
  
  `

  const md= new Remarkable ()
  function TextForm(props) {
    const{handleLogout}=props;
    const [text, setText] = useState("");
    //const [inputText,setInputText]= useState({input:""});
    //const {input} = text;
    useEffect(()=>{
     const formData = localStorage.getItem("my-form-value1");
     if (formData)
     {setText(JSON.parse(formData));}
    },[]);
    useEffect(() => {
      localStorage.setItem("my-form-value1",JSON.stringify(text));
    });
  


    
    // const save = (e) => {
    //   e.preventdefault();

    //   db.collection("documents").doc()
    // }
//    const [isBold, setIsBold] = useState(true);

//   const handleBoldClick = ()=>{
//     let output=document.querySelector(".output1")
//     if(isBold){
//       output.style.fontWeight = "bold"
//       setIsBold(false);
//     }else{
//       output.style.fontWeight = "normal"
//       setIsBold(true);
//     }
//  };
// const [isItalic, setIsItalic] =useState(true);
// const handleItalicClick = ()=>{
//    let output=document.querySelector(".output1")
//    if(isItalic){
//      output.style.fontStyle = "italic"
//      setIsItalic(false);
//     }else{
//       output.style.fontStyle = "normal"
//       setIsItalic(true);
//     }
// }; 
// const [isUnderline, setIsUnderline]= useState(true);
// const handleUnderlineClick = ()=>{
//     let output=document.querySelector(".output1")
//     if(isUnderline){
//       output.style.textDecoration = "underline"
//       setIsUnderline(false);
//     } 
//     else{
//       output.style.textDecoration= "none"
//       setIsUnderline(true);
//     }
// }
// const [isStrike , setIsStrike] = useState(true);
// const handleStrikeClick = ()=>{
//     let output = document.querySelector(".output1")
//     if(isStrike){
//       output.style.textDecoration = "line-through"
//       setIsStrike(false);
//     }
//     else{
//       output.style.textDecoration = "none"
//       setIsStrike(true);
//     }
// }
// const [isUpperCase, setIsUpperCase] = useState(true);
// const handleUpperClick = ()=>{
//     let output = document.querySelector(".output1")
//     if(isUpperCase){
//       output.style.textTransform = "uppercase"
//       setIsUpperCase(false);
//     }
//     else{
//     output.style.textTransform = "none"
//     setIsUpperCase(true);
//     }
// }
// const [isLowerCase, setIsLowerCase] = useState(true);
// const handleLowerClick = ()=>{
//     let output = document.querySelector(".output1")
//     if(isLowerCase){
//       output.style.textTransform = "lowercase"
//       setIsLowerCase(false);
      
//     }
//     else{
//       output.style.textTransform = "none"
//       setIsLowerCase(true);
//     }
//     }
    
  //   const handleClearClick = ()=>{
      
  //     console.log("Clear was clicked"+ text);
  //     let newText='';
  //     setText(newText);
  //   }
  //   const getText = ()=>{
  //     if(document.getSelection){
  //       var text= document.getSelection().toString();
  //       alert(text);
  //     }
  //     else{
  //       if(document.selection){
  //         var text2 = document.selection.createRange();
  //         alert(text2);
  //       }
  //     }
  //   }

  // const [isColor, setIsColorCase] = useState(true);
  // const handleColorClick = ()=>{
  //   let output = document.querySelector(".output1")
  //   if(isColor){
  //     output.style.color= "input"
  //     setIsColorCase(false);
      
  //   }
  //   else{
  //     output.style.textTransform = "none"
  //     setIsLowerCase(true);
  //   }
  //   }
  // function downloadFile (filename,content){
  //   const element = document.createElement('a');
  //   const blob = new Blob([content], {type:'plain/txt'});
  //   const fileURL = URL.createObjectURL(blob);
  //   element.setAttribute('href',fileURL);
  //   element.setAttribute('download',filename);
  //   document.body.appendChild(element);
  //   element.click();
  //   document.body.removeChild(element);
  // }
  // window.onload = ()=>{
  //   document.getElementsByClassName(".button").addEventListener('click', e=>{
  //     const filename = document.getElementsByClassName(".filename").value;
  //     const content = document.getElementsByClassName(".output1").value;
  //     if(filename && content){
  //       downloadFile(filename,content);
  //     }
  //   })
  // }
 
  
    return (
      
        <>
        <div className='entity'>     
        
        
    <div className='header'>Markdown Editor <button className='button1'onClick={handleLogout}>Logout</button></div>   
    <Info>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</Info>
      
      {/* <div className='save'><button className="download"onClick={downloadFile}><DownloadRoundedIcon/></button>               
                <input type="text" className="filename" placeholder='untitled'></input></div> */}
     <div className='main'>           
    <div className='complete'>
    <div className='container1'>
    <div className='markdownheader'>Markdown Text</div>
     <textarea name='textarea' 
               label='markdown' 
               id='markdown'  
               placeholder='Type some text here' 
               value={text} 
               onChange={(e)=>setText(e.target.value)}
    ></textarea>
         </div>
        
        <div className='container2'>        
         <div className='previewheader'>Preview</div>
       <div className="output1" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       
       </div>
       </div>
   
       
       </div> 
       </div>
       </>
   
     
    )
  }
  
  export default TextForm
  