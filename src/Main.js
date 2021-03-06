import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Overview from "./Overview";
import AddressList from "./AddressList";
import NewAddress from "./NewAddress";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Lob Demo</h1>
            <ul className="header">
              <li><NavLink exact to="/">Overview</NavLink></li>
              <li><NavLink to="/AddressList">Address List</NavLink></li>
              <li><NavLink to="/NewAddress">New Address</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path = "/" component={Overview}/>
              <Route path="/AddressList" component={AddressList}/>
              <Route path="/NewAddress" component={NewAddress}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;