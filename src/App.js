import './App.css';
import {
  HashRouter as Router,
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
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route path="/social" component={Social}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
