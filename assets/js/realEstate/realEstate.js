import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (<div>Real Estate</div>);
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
