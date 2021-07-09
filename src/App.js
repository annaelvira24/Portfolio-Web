import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
              <Route path="/">
                <HomePage/>
              </Route>
              <Route path="/about">
                <HomePage/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
