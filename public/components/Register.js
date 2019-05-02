import React, { Component } from 'react';
import { connect } from "react-redux";
 import '../App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { RegisterRequest } from '../state/actions'


class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: ''
  }

  render() {
    return (

      <div className="formdesign">
        <br></br>
        <h2>Register</h2>
        <br />
        <div className="form">

          <input onChange={this.handleChange.bind(this)} name="firstname" type="text" placeholder="First Name" />
          <br />

          <input onChange={this.handleChange.bind(this)} name="lastname" type="text" placeholder="Last Name" />
          <br />

          <input onChange={this.handleChange.bind(this)} name="username" type="text" placeholder="Username" />

          <br />

          <input onChange={this.handleChange.bind(this)} name="password" type="text" placeholder="Password" />
          <br />
 
          <button className="btn " onClick={this.register.bind(this)}>Register!</button>
          <br />

          <br />
          <Link to="/login" id="linkC">Already have an account? Sign in</Link>
        </div>

      </div>

    );
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async register() {
    let mandatory = this.state;
    if (mandatory.firstname === '') {
      alert('First Name required!')
    }
    else if (mandatory.lastname === '') {
      alert('Last Name required!')
    }
    else if (mandatory.username === '') {
      alert('Username required!')
    }
    else if (mandatory.password === '') {
      alert('Password required!')
    }
    else {
      this.props.registerRequest(RegisterRequest(this.state));
      alert('Register Successful');
      this.props.history.push("/login");

    }
  }
}
const mapStateToProps = (state) => {
  return { msg: state.msg };
}

const mapDispatchToProps = dispatch => {
  return {
    registerRequest: function (data) {
      return dispatch(data);
    }
  }
}

const register = connect(mapStateToProps, mapDispatchToProps)(Register)
export default register;
