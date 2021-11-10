//import './App.css';
import Main from "./Main";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import UserId from "./UserId";
import Error from "./Error";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      <>
     <Header/> 
      <Router>
       {/*  <nav>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </nav>   */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error} />
        </Switch>  
      </Router>
      </>  
  );
}

export default App;
