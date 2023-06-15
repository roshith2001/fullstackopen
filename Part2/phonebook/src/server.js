import axios from "axios";

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
    .catch(error => console.log(error.message, 'failed'))
}

const add = (obj) => {
    return(
        axios.post(baseURL, obj)
        .then(response => response.data)
        .catch(error => console.log(error.message, 'failed'))
    )
}

const remove = (id) => {
    return(
        axios
        .delete(`${baseURL}/${id}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message))
    )
}

const alter = (id, newNumber) => {
    return(
        axios.put(`${baseURL}/${id}`, newNumber)
        .then(response => response.data)
        .catch(error => {
            console.log(error.message)
            throw error
        })
    )
}
export default {getAll, add, remove, alter}