import './App.css';
import React from "react";
import Main from "./Main";
import Header from "./Header";
import About from "./About";
import Users from "./Users";
import UserId from "./UserId";
import Error from "./Error";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
      <div>
        <Header />
      <Router>
        <nav className="nav">
         <ul> 
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О программе</Link></li>
            <li><Link to="/users">Пользователи</Link></li>
          </ul>
        </nav>  
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={Error} />
        </Switch>  
      </Router>
      </div>  
  );
}

export default App;
