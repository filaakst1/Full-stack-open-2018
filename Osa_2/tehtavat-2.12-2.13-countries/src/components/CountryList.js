import React from 'react';
const CountryListItem = ({country}) => {
    return (
        <li key={country.name}>{country.name}</li>
    )
}
const CountryInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>capiltal: {country.capital}</div>
            <div>population: {country.population}</div>
            
        </div>
    )
}
const CountryList = ({ countries,matcher}) => {
    const matchResult = countries.filter(matcher)
    console.log(matchResult)
    if(matchResult.length === 1) {
        return (
            <div>
                {matchResult.map(country=><CountryInfo country={country} />)}
            </div>
        )
    }else if(matchResult.length > 10) {
        return (
            <div>too many matches, specify another filter</div>
        )
    } else if(matchResult.length === 0) {
        return (
            <div>no matches</div>
        )
    }
    // When match results > 1 and <=10 
    return (
        <div>
            <ul>
                {matchResult.map(country=><CountryListItem country={country} />)}
            </ul>
        </div>
    )
    
}

export default CountryList