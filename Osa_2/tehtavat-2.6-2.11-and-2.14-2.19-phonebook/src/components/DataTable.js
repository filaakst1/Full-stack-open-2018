import React from 'react';
const DataTableRow = ({person, onButtonClick}) => {
    return (
        <tr><td>{person.name}</td><td>{person.number}</td><td><button type="button" onClick={()=>onButtonClick(person)}>poista</button></td></tr>
    )
}
const DataTable = ({persons, matcher,onButtonClick}) => {
    return (
        <table>
            <tbody>
                {persons.filter(person=>matcher(person)).map(person=><DataTableRow key={person.name} person={person} onButtonClick={onButtonClick}/>)}
            </tbody>
        </table>
    );
};

export default DataTable