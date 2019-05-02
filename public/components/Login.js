import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { LoginRequest } from '../state/actions';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      
        <div className="formdesign">
            <h2>Login</h2>

            <br/>
              <input  onChange={this.handleChange.bind(this)} name="username" type="text" placeholder="Username"  />
           
            <br/>
           
              <input onChange={this.handleChange.bind(this)} name="password" type="text" placeholder="password"  />
          
              <br/>
            {this.props.msg}
          
              <button className="btn " onClick={this.login.bind(this)}>Login</button>
             <br/>
             <br/>
             <br/>
             
              
              <Link to="/Register" id="linkB" > Don't have an account? Sign up!</Link>
            
        </div>
      
    );
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async login() {
    if (!this.state.username) {
      alert('Username required!');
    }
    else if (!this.state.password) {
      alert('password required!');
    }
    else {
      this.props.loginRequest(LoginRequest(this.state));
    }
  }
}

const mapStateToProps = (state) => {
  
  return { isLogged: state.isLogged, role: state.role, msg: state.msg };
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: function (data) {
      return dispatch(data);
    }
  }
}
const login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default login;
