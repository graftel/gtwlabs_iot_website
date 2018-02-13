import React from 'react';

class LoginMain extends React.Component {
  render() {
    return (
      <div className="container text-center">
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }
}

export default LoginMain;
