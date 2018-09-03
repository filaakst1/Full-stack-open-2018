import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)
const Statistic = (props) => {
    const { name, value } = props
    return (
        <dt>{name} {value}</dt>
    )
}
const Statistics = (props) => {
    const { stats } = props

    const good = stats.counterGood
    const neutral = stats.counterNeutral
    const bad = stats.counterBad
    const sum = good+bad+neutral
   
    
    if (sum === 0) {
        return (
          <div>
            <h1>statistiikka</h1>
            <p>ei yhtään palautetta annettu</p>
          </div>
        )
    }

    const average = ((good - bad)/sum).toFixed(1)
    const positive = ((good*100)/sum).toFixed(1) + " %"
    return (
        <div>
            <h1>statistiikka</h1>
            <dl>
                <Statistic name="hyvä" value={good} />
                <Statistic name="neutraali" value={neutral} />
                <Statistic name="huono" value={bad} />
                <Statistic name="keskiarvo" value={average} />
                <Statistic name="positiivisia" value={positive} />
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
            <Button handleClick={this.incrementGood} text="hyvä" />
            <Button handleClick={this.incrementNeutral} text="neutraali" />
            <Button handleClick={this.incrementBad} text="huono" />
        </div>
        <Statistics stats={this.state}  />
        
      </div>
    )
  }
}
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)