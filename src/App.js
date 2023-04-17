import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
function App() {
  // console.log(requests);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
