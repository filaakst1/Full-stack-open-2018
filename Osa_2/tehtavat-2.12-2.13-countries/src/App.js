
import React from 'react'
import axios from 'axios'

import CountrySeach from './components/CountrySearch'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      search: ''
    }
  }

 
  
  componentDidMount() {
    console.log('did mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {

        console.log('promise fulfilled.')
        this.setState({ countries: response.data })
      })
  }
  /* Event handler for search input field changes */
  handleFilterChange = (event) => {
    console.log('Filter change event: '+  event.target.value)
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div>
        <CountrySeach value={this.state.search} onChangeFunction={(e)=> this.handleFilterChange(e)}/>
      
      </div>
    )
  }
}

export default App
