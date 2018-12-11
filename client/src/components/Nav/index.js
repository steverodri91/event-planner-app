import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import './index.css';


export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: ''
    }
  }

  //sets the view
  setView(view){
    this.setState({
      view: view
    })
  }

  getView(){
    if(this.state.view === 'register'){
      return (
        <div>
          <RegisterForm/>
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
    else if(this.state.view === 'login'){
      return (
        <div>
          <LoginForm/>
          <button onClick={() => {this.setView('')}}>Cancel</button>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="nav">
        <h1 id="nav-title">Get Busy</h1>
        <button id="nav-register-button" onClick={() => {this.setView('register')}}>Register</button>
        <button id="nav-login-button" onClick={() => {this.setView('login')}}>Login</button>
        {this.getView()}
      </div>
    )
  }
}
