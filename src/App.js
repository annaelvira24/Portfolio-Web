import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Other from './pages/OtherLinks';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route path="/other" component={Other}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
