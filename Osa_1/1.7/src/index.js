import React from 'react'
import ReactDOM from 'react-dom'

const MyButton = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const MyStatistics = (props) => {
    const { good, neutral, bad } = props
    const sum = good+bad+neutral
    const average = sum!=0? ((good - bad)/sum) : 0
    const positive = sum!=0? ((good*100)/sum) : 0

    return (
        <div>
            <h1>statistiikka</h1>
            <dl>
                <dt>hyvä {good}</dt>
                <dt>neuraali {neutral}</dt>
                <dt>huono {bad}</dt>
                <dt>keskiarvo {average.toFixed(1)}</dt>
                <dt>positiivisia {positive.toFixed(1)} %</dt>
            </dl>
        </div>
    )
  }
  
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counterGood: 0,
        counterNeutral: 0,
        counterBad: 0
      }
    }
    incrementGood = () => {
        this.setState({
            counterGood: this.state.counterGood + 1
        })
      }
    
    incrementNeutral = () => {
        this.setState({
            counterNeutral: this.state.counterNeutral + 1
        })
    }

    incrementBad = () => {
        this.setState({
            counterBad: this.state.counterBad + 1
        })
    }
  
    render() {
        return (
        <div>
        <h1>anna palautetta</h1>
        <div>
            <MyButton handleClick={this.incrementGood} text="hyvä" />
            <MyButton handleClick={this.incrementNeutral} text="neutraali" />
            <MyButton handleClick={this.incrementBad} text="huono" />
        </div>
        <MyStatistics good={this.state.counterGood} neutral={this.state.counterNeutral} bad={this.state.counterBad} />
        
      </div>
    )
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)