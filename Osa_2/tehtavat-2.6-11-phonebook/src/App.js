import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-1123456' },
        { name: 'Martti Tienari', number: '040-2123456' },
        { name: 'Arto Järvinen', number: '040-3123456' },
        { name: 'Lea Kutvonen', number: '040-4123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  /* Event handler for form */
  addContact = (event) => {
    event.preventDefault()
    console.log('Submit button clicked. Value: ' + this.state.newName)

    const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
    }
    const searchIndex = this.state.persons.map(person=> person.name).indexOf(personObject.name)
    if(searchIndex === -1) {

      console.log('New entry')
      const persons = this.state.persons.concat(personObject)
      
      this.setState({
          persons: persons
        })
    }else {
      console.log(personObject + ' exists at index ' +searchIndex)
    } 
  }
  
/* Event handler for input field changes */
  handleContactChange = (event) => {
    console.log('Name change event: ' + event.target.value)
    this.setState({ newName: event.target.value })
  }

  /* Event handler for input field changes */
  handleNumberChange = (event) => {
    console.log('Number change event: ' + event.target.value)
    this.setState({ newNumber: event.target.value })
  }
  /* Event handler for filter input fied changes */
  handleFilterChange = (event) => {
    console.log('Filter change event: '+  event.target.value)
    this.setState({filter: event.target.value})
  }

  /* Simple function for matching name and number fields */
  matchesNameOrNumber = (person) => {
    const nameAndNumber=person.name + ' ' + person.number
    return this.state.filter.length === 0 || nameAndNumber.match(new RegExp(this.state.filter, 'i'))


  }

  
  
  render() {
    return (
      <div>

        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: <input value={this.state.filter} onChange={this.handleFilterChange} />
        </div>
        <form  onSubmit={this.addContact}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleContactChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
          
        </form>
        <h2>Numerot</h2>
          <table>
            <tbody>
              {this.state.persons.filter(person=>this.matchesNameOrNumber(person)).map(person=><tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
            </tbody>
          </table>
        
      </div>
    )
  }
}

export default App
