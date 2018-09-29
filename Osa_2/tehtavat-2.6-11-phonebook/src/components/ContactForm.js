import React from 'react';


const ContactForm = ({ onSubmit,newName,newNumber,nameOnChange,numberOnChange}) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
          nimi: <input value={newName} onChange={nameOnChange}/>
        </div>
        <div>
          numero: <input value={newNumber} onChange={numberOnChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

export default ContactForm
