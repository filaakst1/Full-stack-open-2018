import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}
const Sisalto = (props) => {
    return(
        <div>
            <p>{props.osa1} {props.teht1}</p>
            <p>{props.osa2} {props.teht2}</p>
            <p>{props.osa3} {props.teht3}</p>
        </div>
    
    )
}
const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.yhteensa} tehtävää</p>
    )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1} teht1={tehtavia1}  osa2={osa2} teht2={tehtavia2} osa3={osa3} teht3={tehtavia3} />
            <Yhteensa yhteensa={tehtavia1+tehtavia2+tehtavia3} />
        </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)