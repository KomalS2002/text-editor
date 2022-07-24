import React from "react";
//import { useHistory } from "react-router-dom";
const Login =(props)=>{
    const{email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount,
         emailError, passwordError}= props;


    return(
        < div className="background">
        <div className="auth1">
        <section className="auth">
            <h1 className="line1">Get Started!</h1>
        <div className="loginContainer">
            <div ><button className="google" > 
                Sign in with Google</button></div>
            <div className="line2">OR</div>
            <div >
            <input className="login" type="text" placeholder="email" autoFocus required value={email} onChange = {e=> setEmail(e.target.value)}/>
            <p className="errorMsg">{emailError}</p></div>
            <div >
            <input className="login" type="text" placeholder="password" autoFocus required value={password} onChange = {e=>setPassword(e.target.value)}/>
            <p className="errorMsg">{passwordError}</p></div>
            <div className="buttonContainer">
                {hasAccount ?
            (
                <>
                <button className="signin" onClick={handleLogin}>Sign In</button>
                <p className="line3">Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                </>
            ):
             (  <>
                <button onClick={handleSignup}>Sign up</button>
                <p className="line3">Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                </>
            )}</div>
        </div>
        </section>
        <div ><img className="illustration" src="/images/juicy-girl-is-working-on-laptop-at-a-remote-job.png"  alt=""/></div>
        </div></div>
    )
}
export default Login