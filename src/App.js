import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import React, { useState, useEffect } from "react";
import Login from "./screens/Login";
function App(childData) {
  // const user = props.name;
  useEffect(() => {
    setUser(false);

    return () => {};
  }, []);

  const [user, setUser] = useState(false);
  function CallBack() {
    if (!user) {
      setUser(true);
      console.log(user);
    } else {
      setUser(false);
    }
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login handleCallback={CallBack} />
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={<Homescreen logIn={CallBack} />}
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
