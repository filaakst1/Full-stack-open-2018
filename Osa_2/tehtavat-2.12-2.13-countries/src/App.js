
import React from 'react'
import axios from 'axios'

import CountrySeach from './components/CountrySearch'
import CountryList from './components/CountryList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      search: ''
    }
  }

 
    /* Simple function for matching name and number fields */
  countryNameMatcher = (country) => {
      return this.state.search.length === 0 || country.name.match(new RegExp(this.state.search, 'i'))
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
  countryOnClickHandler = (country) => {
    console.log('Country clicked: '+ country.name)
    this.setState({search: country.name})

  }
  render() {
    return (
      <div>
        <CountrySeach value={this.state.search} onChangeFunction={(e)=> this.handleFilterChange(e)} />
        <CountryList countries={this.state.countries} matcher={(e)=>this.countryNameMatcher(e)} clickHandler={this.countryOnClickHandler} />
      </div>
    )
  }
}

export default App
