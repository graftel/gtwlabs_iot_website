import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="constainer">
        <p> Hello React!111</p>
        <AwesomeComponent />
      </div>
    );
  }
}

export default App;
