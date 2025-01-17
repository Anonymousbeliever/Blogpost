import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;