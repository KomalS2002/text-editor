
//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';

import './App.css';
import  React, {useState, useEffect} from 'react';
import { Remarkable } from 'remarkable';
import fire from './Components/fire';
import Login from './Components/login';
import TextForm from './Components/TextForm';
//import { useHistory } from "react-router-dom";

const md= new Remarkable ()
export default function App() { 
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError]= useState('');
const [hasAccount, setHasAccount] =useState('false');

const clearInputs =()=>{
  setEmail('');
  setPassword('');
}
const clearErrors =()=>{
  setEmailError('');
  setPasswordError('');
}
const handleLogin = ()=>{
  clearErrors();
  fire
 
  .auth()
  .signInWithEmailAndPassword(email,password)
  .catch(error => {
  switch(error.code){
    case "auth/invalid-email":
      setEmailError(error.message);
    case "auth/user-disabled":
    case "auth/user-not-found":
    setPasswordError(error.message);
    break;
    
  }
  })
}
const handleSignup = ()=>{
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch(error => {
  switch(error.code){
    case "auth/email-already-in-use":
    case "auth/invalid-email":
      setEmailError(error.message);
    case "auth/weak-password":
      setPasswordError(error.message);
    break;
    
  }
  })
}
const handleLogout = ()=>{
  fire.auth().signOut();
}
const authListener =()=>{
  fire.auth().onAuthStateChanged(user =>{
    if (user){
      clearInputs();
      setUser(user);

    }
    else{
      setUser("");
    }
  })
}
useEffect(()=>{
  authListener();
  },[]);


//   const [text, setText] = useState("");
//   const [isBold, setIsBold] = useState(true);

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
    
//     const handleClearClick = ()=>{
//       // let output = document.querySelector(".output1")
//       // output.getElementsByClassName("output1").innerHTML = ""
//       // document.getElementsByClassName(".output1").value = "";
//       // console.log("good");
//       console.log("Clear was clicked"+ text);
//       let newText='';
//       setText(newText);
//     }
//     const getText = ()=>{
//       if(document.getSelection){
//         var text= document.getSelection().toString();
//         alert(text);
//       }
//       else{
//         if(document.selection){
//           var text2 = document.selection.creteRange();
//           alert(text2);
//         }
//       }
//     }
// // function color(){document.getElementsByClassName(".output1").style.color = "blue"; }
// // const handleColorClick= ()=>{
// //   let output=document.querySelector(".output1")
// //   output.style.color = "blue";
// //   }
//   const [isColor, setIsColorCase] = useState(true);
//   const handleColorClick = ()=>{
//     let output = document.querySelector(".output1")
//     if(isColor){
//       output.style.foreColor= "input"
//       setIsColorCase(false);
      
//     }
//     else{
//       output.style.textTransform = "none"
//       setIsLowerCase(true);
//     }
//     }
//   function downloadFile (filename,content){
//     const element = document.createElement('a');
//     const blob = new Blob([content], {type:'plain/txt'});
//     const fileURL = URL.createObjectURL(blob);
//     element.setAttribute('href',fileURL);
//     element.setAttribute('btn10',filename);
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   }
//   window.onload = ()=>{
//     document.getElementsByClassName(".btn10").addEventListener('click', e=>{
//       const filename = document.getElementsByClassName(".filename").value;
//       const content = document.getElementsByClassName(".output1").value;
//       if(filename && content){
//         downloadFile(filename,content);
//       }
//     })
//   }
  return (
    <>
    
    {
      user? 
      (<TextForm handleLogout={handleLogout}/>):
      (<Login email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}/>)
        
    }
    {/* <Login email={email} 
    setEmail={setEmail} 
    password={password} 
    setPassword={setPassword}
    handleLogin={handleLogin}
    handleSignup={handleSignup}
    hasAccount={hasAccount}
    setHasAccount={setHasAccount}
    emailError={emailError}
    passwordError={passwordError}/> */}
    {/* <div className= 'entity'>
    <h1 className='header'>Text Editor</h1>
      <nav className="navbar">
                <button className="btn1"onClick={handleBoldClick}>B</button>
                <button className="btn2"onClick={handleItalicClick}>I</button>
                <button className="btn3"onClick={handleUnderlineClick}>U</button>
                <button className="btn4"onClick={handleStrikeClick}>abc</button>
                <button className="btn5"onClick={handleUpperClick}>AA</button>
                <button className="btn6"onClick={handleLowerClick}>aa</button>
                <button className="btn7"onClick={handleClearClick}>Clear</button>
                <button className='btn8'onClick={getText}>Select</button>
                <button className="btn9" onClick={handleColorClick}>Color</button>
                <button className="btn10"onClick={downloadFile}>Download</button>               
                <input type="text" className="filename" placeholder='untitled'></input>
                
      </nav>
    <div className='complete'>

    
     <textarea name='textarea' className='container1' cols="700" rows="10" placeholder='  Type some text here' value={text}onChange={(e)=>setText(e.target.value)}
         ></textarea>
         
        
         <div className='container2'>        
         <h3 className='output'>Output</h3>
       <div className="output1" dangerouslySetInnerHTML={{__html:md.render(text)}}></div>
       <p className='info'>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    </div>
    </div>
    </div> */}
    {/* <TextForm handleLogout={handleLogout}/> */}
    
    </>
  );
}





