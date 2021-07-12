import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
