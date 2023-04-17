import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homescreen from "./Homescreen";
function App() {
  // console.log(requests);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Homescreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
