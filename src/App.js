import React, { Component } from 'react';
import './stylesheet/App.css';

import Jobs from './components/jobs';

class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"headerContainer"}>
          <div>
            <h1>Job Positions</h1>
            <h6>Vagas de trabalho relacionadas a Tecnologia</h6>
          </div>
        </div>
        <Jobs />
        <button className={"floatingButton btn"}>+</button>
      </div>
    );
  }
}

export default App;
