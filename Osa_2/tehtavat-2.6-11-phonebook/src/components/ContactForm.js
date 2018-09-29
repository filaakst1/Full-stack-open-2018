import React from 'react';

const FormField = ({label, value, onChange}) => {
  return (
    <div>{label}<input value={value} onChange={onChange}/></div>
  )
}
const SubmitButton= () => {
  return (
    <div>
      <button type="submit">lisää</button>
    </div>
  )
}
const ContactForm = ({ onSubmit,newName,newNumber,nameOnChange,numberOnChange}) => {
    return (
        <form onSubmit={onSubmit}>
          <FormField label='nimi: ' value={newName} onChange={nameOnChange} />
          <FormField label='numero: ' value={newNumber} onChange={numberOnChange} />
          <SubmitButton  />
      </form>
    )
}

export default ContactForm
