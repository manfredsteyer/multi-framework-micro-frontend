import React from 'react'
import ReactWebComponent from 'react-web-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Micro Frontend 4
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40"></img>
        </h1>
        <p>
          Hello World!
        </p>
     </div>
    )
  }
}

ReactWebComponent.create(<App />, 'mfe4-element');
