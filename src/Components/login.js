import React from "react";
//import { useHistory } from "react-router-dom";
const Login =(props)=>{
    const{email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount,
         emailError, passwordError,}= props;


    return(
        < div className="background">
        <div className="auth1">
        <section className="auth">
        <div className="loginContainer">
            <div className="google"><button> 
                Sign in with Google</button></div>
            <div>OR</div>
            <div className="google">
            <input type="text" placeholder="email" autoFocus required value={email} onChange = {e=> setEmail(e.target.value)}/>
            <p className="errorMsg">{emailError}</p></div>
            <div className="google">
            <input type="text" placeholder="password" autoFocus required value={password} onChange = {e=>setPassword(e.target.value)}/>
            <p className="errorMsg">{passwordError}</p></div>
            <div className="buttonContainer">
                {hasAccount ?
            (
                <>
                <button onClick={handleLogin}>Sign In</button>
                <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                </>
            ):
             (  <>
                <button onClick={handleSignup}>Sign up</button>
                <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                </>
            )}</div>
        </div>
        </section>
        <div ><img className="illustration" src="/images/people-working-together-online.png"  alt=""/></div>
        </div></div>
    )
}
export default Login