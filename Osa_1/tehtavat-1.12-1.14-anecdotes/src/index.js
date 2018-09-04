import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)
const AnecdoteDisplay = ({anecdote, points}) => {
  const voteString = points===1 ? 'vote' : 'votes'
  return (
    <div>
      <p>{anecdote}<br />has {points} {voteString}</p>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    const points = []
    let anec
    for(anec in props.anecdotes) {
      points[anec] = 0
    }
    this.state = {
      selected: 0,
      points : points
    }
  }
  nextAnecdote = (anecdotes) => {
    let nextIndex = this.state.selected;
    while(this.state.selected ===nextIndex ) {
      nextIndex = Math.floor(Math.random() * anecdotes.length);
    }

    return () =>  this.setState({
        selected: nextIndex
    })
  }
  vote = () =>{
    const currentPoints = this.state.points
    const index = this.state.selected
    const copyOfPoints = [...currentPoints]
    copyOfPoints[index] += 1
    return () =>  this.setState({
        points: copyOfPoints
    })
  }
  render() {
    return (
      <div>
        <AnecdoteDisplay anecdote={this.props.anecdotes[this.state.selected]} points={this.state.points[this.state.selected]} />
        <div>
          <Button handleClick={this.vote()} text="vote" />
          <Button handleClick={this.nextAnecdote(this.props.anecdotes)} text="next anecdote" />
        </div>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
