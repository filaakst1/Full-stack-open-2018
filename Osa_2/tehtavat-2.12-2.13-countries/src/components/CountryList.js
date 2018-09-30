import React from 'react';
const CountryListItem = ({country,clickHandler}) => {
    return (
        <li onClick={()=> clickHandler(country)}>{country.name}</li>
        
    )
}
const CountyName =({country}) => {
    return (<h1>{country.name}</h1>)
}
const CountryCapital=({country}) => {
    return (<p>capital: {country.capital}</p>)
}
const CountryPopulation=({country}) => {
    return (<p>population: {country.population}</p>)
}
const CountryFlag=({country}) => {
    return (<p><img alt="country flag" width="20%" src={country.flag} /></p>)
}

const CountryInfo = ({country}) => {
    return (
        <div>
            <CountyName country={country} />
            <CountryCapital country={country} />
            <CountryPopulation country={country} />
            <CountryFlag country={country} />
        </div>
    )
}
const CountryList = ({ countries,matcher,clickHandler}) => {
    const matchResult = countries.filter(matcher)
    console.log(matchResult)
    if(matchResult.length === 1) {
        return (
            <div>
                {matchResult.map(country=><CountryInfo key={country.name} country={country} />)}
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
                {matchResult.map(country=><CountryListItem key={country.name} country={country} clickHandler={clickHandler}/>)}
            </ul>
        </div>
    )
    
}

export default CountryList