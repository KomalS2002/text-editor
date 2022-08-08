//import firebase from 'firebase';
//import {Getfirestore} from 'firebase/firestore';
//import {GetStorage} from 'firebase/storage';
//import "firebase/storage"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyAY7KjBfEL4x4hzQquraEGz5Ovy51dWy-0",
    authDomain: "texteditor-auth.firebaseapp.com",
    databaseURL: "https://texteditor-auth-default-rtdb.firebaseio.com",
    projectId: "texteditor-auth",
    storageBucket: "texteditor-auth.appspot.com",
    messagingSenderId: "556205504471",
    appId: "1:556205504471:web:9c358dbee4b0b4c6bb3d92",
    measurementId: "G-YL168TX762"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  //const db = fire.firestore();
  
  export default fire;

  // export const provider = new GoogleAuthProvider()
  // const signInWithGoogle =()=>{
  //   signInWithPopup(fire,provider).then((result)=>{
  //     console.log(result);
  //    })
  //    .catch((error)=>{console.log(error);});
  // };