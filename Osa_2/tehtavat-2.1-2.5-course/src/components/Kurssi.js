import React from 'react'

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
    return(
        <div>
            {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
        </div>
    )
}
const Yhteensa = ({kurssi}) => {
    return (
        <p>yhteensä {kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia,0)} tehtävää</p>
    )
}
const Kurssi = ({ kurssi }) => (
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
    </div>
)

export default Kurssi