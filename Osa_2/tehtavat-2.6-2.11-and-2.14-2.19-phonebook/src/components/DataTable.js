import React from 'react';

const DataTable = ({persons, matcher}) => {
    return (
        <table>
            <tbody>
                {persons.filter(person=>matcher(person)).map(person=><tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
            </tbody>
        </table>
    );
};

export default DataTable