import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { LoginForm } from './parts/loginform'
import RegForm from './parts/regform'
import './login.css'
import { alertActions } from '../_actions/alertAction'

class LoginMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showLogin: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(b) {
    this.props.store.dispatch(alertActions.clear());
    this.setState({showLogin: b});
  } 
  
  
  render() {
    let active_form = null;
    if (this.state.showLogin){
      active_form = <LoginForm {...this.props}/>;
    }
    else{
      active_form = <RegForm {...this.props}/>
    }
    
    return (
      <div className="container text-center">
        <div className="panel panel-login">
          <div className="panel-title">
              <h1 className="h3 mb-3 font-weight-normal">IIoT Monitoring Demo</h1>
          </div>
          <div className="panel-heading">
            <div className="row">
              <div className="col" onClick={() => this.handleClick(true)}>
                <a href="#" className={this.state.showLogin ? 'Active' : ''} id="login-form-link">Login</a>
              </div>
              <div className="col" onClick={() => this.handleClick(false)}>
                <a href="#" className={this.state.showLogin ? '' : 'Active'} id="register-form-link" >Register</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="panel-body">
            <CSSTransitionGroup
              transitionName="form-trans"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
                {active_form}
                <div className="container" id="alert">
                </div>
                <a href="/forgotpassword"> Forgot password? </a>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginMain;
