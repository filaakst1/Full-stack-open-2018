import React from 'react'
import axios from 'axios'

import DataFilter from './components/DataFilter'
import ContactForm from './components/ContactForm'
import DataTable from './components/DataTable'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
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

      axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(response)
        this.setState({
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        })
      })

    }else {
      console.log(personObject + ' exists at index ' +searchIndex)
    } 
  }
  
  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {

        console.log('promise fulfilled.')
        this.setState({ persons: response.data })
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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <DataFilter value={this.state.filter} 
                    onChangeFunction={(e)=> this.handleFilterChange(e)} />
        <ContactForm  onSubmit={(e)=> this.addContact(e)} 
                      newName={this.state.newName} 
                      newNumber={this.state.newNumber}
                      nameOnChange={(e)=> this.handleContactChange(e)}
                      numberOnChange={(e)=> this.handleNumberChange(e)} />
       
        <h2>Numerot</h2>
        <DataTable persons={this.state.persons} matcher={p=> this.matchesNameOrNumber(p)} />
      </div>
    )
  }
}

export default App
