import React from "react";
//import { useHistory } from "react-router-dom";
const Login =(props)=>{
    const{email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount,
         emailError, passwordError}= props;


    return(
        < div className="background">
            
        <div className="auth1">
        <img className="illustration" 
             src="./images/grapy-programmer-coding-with-two-monitovrs.png"  
             alt=""/>
        <section className="auth">
            <h1 className="line1">Get Started!</h1>
        <div className="loginContainer">
            {/* <div ><button className="google" > 
                Sign in with Google</button></div>
            <div className="line2">OR</div> */}
            <div >
            <input className="login" 
                   type="text" 
                   placeholder="email" 
                   autoFocus required value={email} 
                   onChange = {e=> setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p></div>
            <div >
            <input className="login" 
                   type="password" 
                   placeholder="password" 
                   autoFocus required value={password} 
                   onChange = {e=>setPassword(e.target.value)}
                   />
            <p className="errorMsg">{passwordError}</p>
            </div>
            <div className="buttonContainer">
                {hasAccount ?
            (
                <>
                <button className="signin" 
                onClick={handleLogin}>
                    Sign In
                </button>
                <p className="line3">
                    Don't have an account ? 
                    <span className="span" 
                    onClick={()=>setHasAccount(!hasAccount)}>
                        Sign up
                    </span>
                </p>
                </>
            ):
             (  <>
                <button 
                className="signup" 
                onClick={handleSignup}>
                    Sign up
                </button>
                <p className="line3">
                    Have an account ? 
                    <span className="span" 
                    onClick={()=>setHasAccount(!hasAccount)}>
                    Sign in
                    </span>
                </p>
                </>
            )}</div>
        </div>
        </section>
        
        </div>
        </div>
    )
}
export default Login