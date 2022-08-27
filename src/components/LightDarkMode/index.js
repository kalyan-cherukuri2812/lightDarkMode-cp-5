// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {lightMode: false}

  light = () => {
    this.setState(prev => ({lightMode: !prev.lightMode}))
  }

  dark = () => {
    this.setState(prev => ({lightMode: !prev.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    return (
      <div className="bg-container">
        {lightMode === false ? (
          <div className="dark">
            <h1 className="dark-heading">Click To Change Mode</h1>
            <button className="light-btn" onClick={this.light} type="button">
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light">
            <h1 className="light-heading">Click To Change Mode</h1>
            <button className="dark-btn" onClick={this.dark} type="button">
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
