
//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';

import './App.css';
import  React, {useState, useEffect} from 'react';
import { Remarkable } from 'remarkable';
import fire from './Components/fire';
import Login from './Components/login';
import TextForm from './Components/TextForm';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
//import { useHistory } from "react-router-dom";
const Appcontainer= styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

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



  return (
    
    <Appcontainer>
      
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
    
    </Appcontainer>
    
    
  );
}





