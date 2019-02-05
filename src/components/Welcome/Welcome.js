import React, { Component } from 'react';
import './Welcome.css';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

class Welcome extends Component {
  render() {
    return (
      <div className="row">
      <div className="medium-12 columns">
      <h3>{this.props.appName}Project Description Welcome Page</h3>
      
      <a href="/Login" className="button">Login</a>
      
      {/* <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} /> */}

      {/* <FacebookLogin
        appId="1976033449154284"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} /> */}

      <a href="/Signup" className="button success">Signup</a>

      </div>
      </div>
    );
  }
}

export default Welcome;
