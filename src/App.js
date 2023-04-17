import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Login from "./screens/Login";
function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
