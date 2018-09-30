import React from 'react';
const DataTableRow = ({person}) => {
    return (
        <tr><td>{person.name}</td><td>{person.number}</td></tr>
    )
}
const DataTable = ({persons, matcher}) => {
    return (
        <table>
            <tbody>
                {persons.filter(person=>matcher(person)).map(person=><DataTableRow key={person.name} person={person}/>)}
            </tbody>
        </table>
    );
};

export default DataTable