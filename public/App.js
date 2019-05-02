import React, { Component } from 'react';

import './App.css';
import { connect } from "react-redux";
import { LoginRequest } from './state/actions';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faPaperPlane,faCheckCircle ,faCheck, } from '@fortawesome/free-solid-svg-icons'

import UserInterface from './components/UserUi/UserInterface';
import Admin from './components/AdminUi/Admin';

library.add(faCheck)
library.add(faIgloo)
library.add(faPaperPlane)
library.add(faCheckCircle );


class App extends Component {

  componentDidMount(){
    this.props.dispatch(LoginRequest());
  }

  render() {
    if (this.props.isLogged === true && this.props.role === "User") {
      return (
        <React.Fragment>
          <UserInterface />
        </React.Fragment>
      )
    }
    if (this.props.isLogged === true && this.props.role === "Admin") {
      return (
        <React.Fragment>
          <Admin />
        </React.Fragment>
      )
    }
    else {
      return (
   

       <Router>         <div className="App">

         <h1 >Vacation Follower  <FontAwesomeIcon id="paper" icon="paper-plane" /></h1>
        
        
     

         <Route exact path="/" component={Register} />
         
         <Route exact path="/register" component={Register} />
         <Route exact path="/login" component={Login} />
        
        
     
       
       </div>
      </Router>

);
}
}
}

const mapStateToProps = (state) => {
return { isLogged: state.isLogged, role: state.role, msg: state.msg };

}

const mapDispatchToProps = (dispatch) => {
let obj = {
dispatch: (data) => {
  dispatch(data);
}
}
return obj;
}

const app = connect(mapStateToProps, mapDispatchToProps)(App);
export default app;
