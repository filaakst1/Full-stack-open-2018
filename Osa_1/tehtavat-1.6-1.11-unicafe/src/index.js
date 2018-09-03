import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)
const Statistic = (props) => {
    console.log(props)
    const { name, value } = props
    return (
        <dt>{name} {value}</dt>
    )
}
const Statistics = (props) => {
    console.log(props)
    const { stats } = props

    const good = stats.counterGood
    const neutral = stats.counterNeutral
    const bad = stats.counterBad
    const sum = good+bad+neutral
    const average = (sum!==0? ((good - bad)/sum) : 0).toFixed(1)
    const positive = (sum!==0? ((good*100)/sum) : 0).toFixed(1) + " %"

    return (
        <div>
            <h1>statistiikka</h1>
            <dl>
                <Statistic name="hyvä" value={good} />
                <Statistic name="neuraali" value={neutral} />
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