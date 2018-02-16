import React from 'react';

class LoginMain extends React.Component {
  
  
  
  render() {
    return (
      <div className="container text-center">
        <div className="panel panel-login">
          <div className="panel-title">
              <h1 className="h3 mb-3 font-weight-normal">IIoT Monitoring Demo</h1>
          </div>
          <div className="panel-heading">
            <div className="row">
              <div className="col">
                <a href="/login" className="active" id="login-form-link">Login</a>
              </div>
              <div className="col">
                <a href="#" id="register-form-link">Register</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="panel-body">
            <form id="login-form" action="/login" method="post" role="form">
                <div className="form-group">
                    <input type="text" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password"
                    tabIndex="2" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </div>
            </form>
            <form id="register-form" action="/register" method="post" role="form">
              <div className="form-group">
                <input type="email" name="email" id="emailreg" tabIndex="1"
                  className="form-control" placeholder="Email Address" value="" />
              </div>
              <div className="form-group">
                <input type="password" name="password" id="passwordreg"
                  tabIndex="2" className="form-control" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="password" name="confirm-password"
                  id="confirm-password" tabIndex="3" className="form-control"
                  placeholder="Confirm Password" />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              </div>
            </form>
            <div className="container" id="alert">
            </div>
            <a href="/forgotpassword"> Forgot password? </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginMain;
