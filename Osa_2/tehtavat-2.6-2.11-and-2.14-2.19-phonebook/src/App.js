import React from 'react'

import DataFilter from './components/DataFilter'
import ContactForm from './components/ContactForm'
import DataTable from './components/DataTable'
import Notification from './components/Notification'

import personsService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: null
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
      personsService.create(personObject).then(response => {
        console.log(response)
        this.setState({
          persons: this.state.persons.concat(response),
          newName: '',
          newNumber: '',
          message: 'lisattiin ' + response.name
        })
        setTimeout(() => {this.setState({message: null})}, 5000)
      })
    }else {
      const personToUpdate = this.state.persons[searchIndex]
      const result = window.confirm(personToUpdate.name + ' on jo luettelossa, korvataanko vanha numero uudella?' )
      if(result) {
        
          personsService.updatePerson(personToUpdate.id, personObject).then(response=> {
            const newPersons = this.state.persons.filter(p => p.id !== personToUpdate.id)
            this.setState({
              persons: newPersons.concat(response),
              message: 'muutettiin ' + personToUpdate.name + ' tietoja'
            })
            setTimeout(() => {this.setState({message: null})}, 5000)
          })
      }

    } 
  }
  
  componentDidMount() {
    console.log('did mount')
    personsService.getAll().then(response => {
      console.log('promise fulfilled.')
      this.setState({ persons: response })
    })
  
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
  /* On click handler for buttons */
  onButtonClick = (person) => {
      console.log('Button clicked: ' + person.name)
      const result = window.confirm('poistetaanko ' +person.name )
      if(result) {
        const deleteResult = personsService.deletePerson(person)
        console.log("Delete result: " + deleteResult)
        const newPersons = this.state.persons.filter(arrayPerson=>arrayPerson.id !== person.id)
        this.setState({ 
          persons: newPersons,
          message: 'poistettiin ' + person.name
        })
        setTimeout(() => {this.setState({message: null})}, 5000)
      } 
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.message} />
        <DataFilter value={this.state.filter} 
                    onChangeFunction={(e)=> this.handleFilterChange(e)} />
        <ContactForm  onSubmit={(e)=> this.addContact(e)} 
                      newName={this.state.newName} 
                      newNumber={this.state.newNumber}
                      nameOnChange={(e)=> this.handleContactChange(e)}
                      numberOnChange={(e)=> this.handleNumberChange(e)} />
       
        <h2>Numerot</h2>
        <DataTable persons={this.state.persons} matcher={p=> this.matchesNameOrNumber(p)} onButtonClick={this.onButtonClick} />
      </div>
    )
  }
}

export default App
