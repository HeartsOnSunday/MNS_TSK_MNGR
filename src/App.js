import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Post from "./Components/Post";
import SubNav from "./Components/SubNav.js";
import Master from "./Components/Master.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <SubNav />
          <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
