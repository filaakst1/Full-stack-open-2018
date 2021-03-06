import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl).then(response=>response.data)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then(response=>response.data)
}
const deletePerson = (person) => {
    return axios.delete(`${baseUrl}/${person.id}`).then(response => response.data)
} 
const updatePerson = (id, person) => {
    return axios.put(`${baseUrl}/${id}`, person).then(response => response.data)
}
export default { getAll, create,deletePerson,updatePerson}
