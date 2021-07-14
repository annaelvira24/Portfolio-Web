import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Social from './pages/Social';

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
              <Route path="/portfolio">
                <Portfolio/>
              </Route>
              <Route path="/social">
                <Social/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
