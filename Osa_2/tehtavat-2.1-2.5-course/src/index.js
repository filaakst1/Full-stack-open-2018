import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => {
    return (
        <h1>{kurssi.nimi}</h1>
    )
}
const Osa = ({osa}) => {
    return (
        <div>
            <p>{osa.nimi} {osa.tehtavia}</p>
        </div>
    )

}
const Sisalto = ({kurssi}) => {
    const rivit = () => kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)

    return(
        <div>
            {rivit()}
        </div>
    )
}

const Kurssi = ({ kurssi }) => (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
    </div>
)
const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          }
        ]
      }
      return (
        <div>
          <Kurssi kurssi={kurssi} />
        </div>
      )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)