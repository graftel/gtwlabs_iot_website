import React from 'react';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    if (1)
    {
      return (<Redirect to='/login' />);
    }
    else{
      return (
        <div>
          Likes : <span>{this.state.likesCount}</span>
          <div><button onClick={this.onLike}>Like Me</button></div>
        </div>
      );
    }

  }
}


export default HomePage;
