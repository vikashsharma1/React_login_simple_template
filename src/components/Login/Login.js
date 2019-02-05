import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  login(){
    console.log('Login function')
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <div className="row small-upto-2 medium-upto-3 large-upto-4">
      <div className="columns bodyPart">
      <h3>Login Page</h3>
      
      <label>Username</label>
      <input type="username" placeholder="useranme" onChange={this.onChange}/>
      <label>Password</label>
      <input type="password" placeholder="password" onChange={this.onChange}/>
      <input type="submit" value="Login" className="button" onClick={this.login}/> 
      
      </div>
      </div>
    );
  }
}

export default Login;