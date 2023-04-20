import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="background">
        <img
          className="logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="gradient" />
        <div className="body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited files, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership{" "}
              </h3>
              <div className="logininput">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED{" "}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
