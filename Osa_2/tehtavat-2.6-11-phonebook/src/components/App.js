import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  /* Event handler for form */
  addContact = (event) => {
    event.preventDefault()
    console.log('Button clicked')
    console.log('Button clicked')
     
  }
  /* Event handler for input field changes */
  handleContactChange = (event) => {
    console.log('Change event: ' + event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form  onSubmit={this.addContact}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleContactChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
            {this.state.persons.map(person=> <li key={person.name}>{person.name}</li>)}
      </div>
    )
  }
}

export default App
