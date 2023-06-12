import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import Input from './components/Input'
import NumberList from './components/NumberList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [isFiltering, setIsFiltering] = useState(false)
  const [filteredPerson,setFilteredPerson] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log('Succesfull', response.data)
      })
  },[])

  const handleNameChange = (value) => {
    setNewName(value)
  }

  const handleNumberChange = (value) => {
    setNewNumber(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const personNameObj = {
      name: newName,
      phone: newNumber
    }
    const checkArray =  persons.find(newFilterName => newFilterName.name===newName)
    if(checkArray === undefined){
      const newPersons = [...persons, personNameObj]
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${newName} is already there`)
    }
  }

  const handleFilterChange = (e) => {
    setFilterName(e.target.value)
    if(filterName !== ''){
      setIsFiltering(true)
    }
    setFilteredPerson(persons.filter((filterValue) => filterValue.name.toLowerCase().includes(filterName.toLowerCase())));
    console.log(filteredPerson)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter change={handleFilterChange}/>
      <h2>add a new</h2>
      <Input handleSubmit={handleSubmit} newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <NumberList isFiltering={isFiltering} persons={persons}
        filteredPerson={filteredPerson}  
      />
    </div>
  )
}

export default App