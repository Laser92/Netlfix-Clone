import React, { useRef } from "react";
import "./SignUpScreen.css";

function SignUpScreen(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function login() {
    props.login();
  }
  const register = (e) => {
    e.preventDefault();
    //   auth.createUserWithEmailAndPassword(
    //     emailRef.current.value,passwordRef.current.value
    //   )
    //   .then((authUser)=>{
    //     console.log(authUser)})
    //     .catch(error=>{alert(error.message)
    //     });
    //   };
    // const signIn = (e) => {
    //   e.preventDefault();
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={() => login()}>
          Sign In
        </button>
        <h4>
          <span className="gray">New to Netflix?</span>
          <span className="link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
