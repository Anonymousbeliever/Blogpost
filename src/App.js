import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';  
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div >
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>

            <Route path="/Create">
              <Create />  
            </Route>
            <Route path="/Blog-details/:id" component={BlogDetails}/>
            
           

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
