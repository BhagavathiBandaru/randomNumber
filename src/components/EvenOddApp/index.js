// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getAnyRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getAnyRandomNumber()

    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state

    const text = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="display-container">
          <h1 className="count-Number">Count {number}</h1>
          <h1 className="counter-heading">Count is {text}</h1>
          <button
            className="button"
            type="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="footer-text">
            *Increase By Random Number Between 0 to 1000
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
