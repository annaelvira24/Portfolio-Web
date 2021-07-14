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
              <Route exact path="/Portfolio-Web">
                <HomePage/>
              </Route>
              <Route exact path="/Portfolio-Web/about">
                <About/>
              </Route>
              <Route exact path="/Portfolio-Web/portfolio">
                <Portfolio/>
              </Route>
              <Route exact path="/Portfolio-Web/social">
                <Social/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
