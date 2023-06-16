import { useEffect, useState } from 'react'

import Filter from './components/Filter'
import Input from './components/Input'
import NumberList from './components/NumberList'
import NotifyBar from './components/NotifyBar'
import services from './server'


const App = () => {
  const [persons, setPersons] = useState(null) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [isFiltering, setIsFiltering] = useState(false)
  const [filteredPerson,setFilteredPerson] = useState(null)
  const [statusMessage, setStatusMessage] = useState(null)
  const [statusMood, setStatusMood] = useState('success')

  useEffect(() => {
    services
    .getAll()
    .then(retrievedPhoneBook => {
      setPersons(retrievedPhoneBook)
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
    const exsistingNumber =  persons.find(newFilterName => newFilterName.name===newName)
    if(exsistingNumber === undefined){
      // const newPersons = [...persons, personNameObj]
      // setPersons(newPersons)
      services.add(personNameObj)
      .then(newNumber => {
        setPersons([...persons, newNumber])
        setStatusMessage('Added Successfully')
        setTimeout(() => setStatusMessage(null), 3000) 
      })
    }
    else{
      window.confirm(`${newName} is already there do you want to update the new Number`) 
      const phoneUpdate = {...exsistingNumber, phone: newNumber}
      services.alter(exsistingNumber.id, phoneUpdate)
      .then(changedPhone => {
          setPersons(persons.map(item => 
            item.id !== changedPhone.id ? item : changedPhone
          ))
          setStatusMessage('Updated Successfully')
          setTimeout(() => setStatusMessage(null), 3000)
      })
      .catch(error => {
        console.log(error.response.status)
        setStatusMessage('Already Deleted')
        setStatusMood('fail')
        setTimeout(() => {
          setStatusMessage(null)
          setStatusMood('success')
        }, 3000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (e) => {
    setFilterName(e.target.value)
    if(filterName !== ''){
      setIsFiltering(true)
    }
    setFilteredPerson(persons.filter((filterValue) => filterValue.name.toLowerCase().includes(filterName.toLowerCase())));
    console.log(filteredPerson)
  }

  const handleDelete = (id, name, num) => {
    window.confirm(`You are going to Delete ${id} ${name} ${num}`)
    services.remove(id)
    .then(() => {
      setPersons(prevPerson => prevPerson.filter(item => item.id !== id))
      setStatusMessage(`${name} is deleted successfully`)
      setTimeout(() => {
        setStatusMessage(null)
        setStatusMood('success')
      }, 3000)
    })
    .catch(() => {
      setStatusMessage('Already Deleted')
      setStatusMood('fail')
      setTimeout(() => {
        setStatusMessage(null)
        setStatusMood('success')
      }, 3000)
    })
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
      <NotifyBar message={statusMessage} mood={statusMood}/>
      <h2>Numbers</h2>
      <NumberList isFiltering={isFiltering} persons={persons}
        filteredPerson={filteredPerson} handleDelete={handleDelete}  
      />
    </div>
  )
}

export default App